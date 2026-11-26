resource "aws_iam_role" "lambda_role" {
  name = "${var.app_name}-lambda-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

# Policy to access Secrets Manager
resource "aws_iam_role_policy" "lambda_secrets_policy" {
  name = "${var.app_name}-lambda-secrets-policy"
  role = aws_iam_role.lambda_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "secretsmanager:GetSecretValue"
        ]
        Resource = "arn:aws:secretsmanager:${var.aws_region}:*:secret:prod/design-assistant/*"
      }
    ]
  })
}

# Attach basic Lambda execution role
resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role       = aws_iam_role.lambda_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# Lambda function for getting auth URL
resource "aws_lambda_function" "github_auth_url" {
  filename         = "${path.module}/../functions/github-oauth/lambda.zip"
  function_name    = "${var.app_name}-${var.environment}-github-auth-url"
  role            = aws_iam_role.lambda_role.arn
  handler         = "index.getAuthUrl"
  source_code_hash = filebase64sha256("${path.module}/../functions/github-oauth/lambda.zip")
  runtime         = "nodejs22.x"
  timeout         = 30

  environment {
    variables = {
      REDIRECT_URI = var.github_oauth_redirect_uri
      ALLOWED_ORIGIN = var.allowed_origins[0]
      ENVIRONMENT = var.environment
    }
  }
}

# Lambda function for OAuth callback
resource "aws_lambda_function" "github_callback" {
  filename         = "${path.module}/../functions/github-oauth/lambda.zip"
  function_name    = "${var.app_name}-${var.environment}-github-callback"
  role            = aws_iam_role.lambda_role.arn
  handler         = "index.handleCallback"
  source_code_hash = filebase64sha256("${path.module}/../functions/github-oauth/lambda.zip")
  runtime         = "nodejs22.x"
  timeout         = 30

  environment {
    variables = {
      ALLOWED_ORIGIN = var.allowed_origins[0]
      ENVIRONMENT    = var.environment
    }
  }
}

# API Gateway
resource "aws_apigatewayv2_api" "api" {
  name          = "${var.app_name}-${var.environment}-api"
  protocol_type = "HTTP"
  
  cors_configuration {
    allow_origins = var.allowed_origins
    allow_methods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
    allow_headers = ["content-type", "authorization", "x-amz-date", "x-api-key", "x-amz-security-token"]
    expose_headers = ["x-amzn-requestid", "x-amzn-trace-id"]
    max_age       = 300
    allow_credentials = true
  }
}

# CloudWatch Log Group for API Gateway
resource "aws_cloudwatch_log_group" "api_logs" {
  name              = "/aws/apigateway/${var.app_name}-${var.environment}-api"
  retention_in_days = 7
  tags = {
    Environment = var.environment
    Project     = var.app_name
  }
}

# API Gateway Stage
resource "aws_apigatewayv2_stage" "api" {
 # depends_on = [aws_cloudwatch_log_group.api_logs]
  api_id      = aws_apigatewayv2_api.api.id
  name        = var.environment
  auto_deploy = true

 # access_log_settings {
 #  destination_arn = aws_cloudwatch_log_group.api_logs.arn
 #  format = jsonencode({
 #    requestId      = "$context.requestId"
 #    ip             = "$context.identity.sourceIp"
 #    requestTime    = "$context.requestTime"
 #    httpMethod     = "$context.httpMethod"
 #    routeKey       = "$context.routeKey"
 #    status         = "$context.status"
 #    protocol       = "$context.protocol"
 #    responseLength = "$context.responseLength"
 #  })
 #}
}

# Integration for auth URL endpoint
resource "aws_apigatewayv2_integration" "auth_url" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.github_auth_url.invoke_arn
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "auth_url" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /auth/github/url"
  target    = "integrations/${aws_apigatewayv2_integration.auth_url.id}"
}

# Integration for callback endpoint
resource "aws_apigatewayv2_integration" "callback" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.github_callback.invoke_arn
  integration_method = "POST"
  payload_format_version = "2.0"
}

resource "aws_apigatewayv2_route" "callback" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "POST /auth/github/callback"
  target    = "integrations/${aws_apigatewayv2_integration.callback.id}"
}

# Lambda permissions for API Gateway
resource "aws_lambda_permission" "auth_url" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.github_auth_url.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}

resource "aws_lambda_permission" "callback" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.github_callback.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}

# DynamoDB policy
resource "aws_iam_role_policy" "lambda_dynamodb_policy" {
  name = "${var.app_name}-lambda-dynamodb-policy"
  role = aws_iam_role.lambda_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "dynamodb:PutItem",
          "dynamodb:GetItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem",
          "dynamodb:Query",
          "dynamodb:Scan"
        ]
        Resource = [
          aws_dynamodb_table.projects.arn,
          "${aws_dynamodb_table.projects.arn}/index/*",
          aws_dynamodb_table.usage.arn,
          aws_dynamodb_table.prompts.arn,
        ]
      }
    ]
  })
}

# Projects Lambda function
resource "aws_lambda_function" "projects" {
  filename         = "${path.module}/../functions/projects/lambda.zip"
  function_name    = "${var.app_name}-${var.environment}-projects"
  role            = aws_iam_role.lambda_role.arn
  handler         = "index.handler"
  source_code_hash = filebase64sha256("${path.module}/../functions/projects/lambda.zip")
  runtime         = "nodejs22.x"
  timeout         = 30
  memory_size     = 512

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.projects.name
      CONTENT_BUCKET  = aws_s3_bucket.project_content.bucket
      ALLOWED_ORIGINS = join(",", var.allowed_origins)
    }
  }
}

# Single integration for all project routes
resource "aws_apigatewayv2_integration" "projects" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.projects.invoke_arn
  payload_format_version = "2.0"
}

# Routes for projects
resource "aws_apigatewayv2_route" "projects_get" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /projects"
  target    = "integrations/${aws_apigatewayv2_integration.projects.id}"
}

resource "aws_apigatewayv2_route" "projects_post" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "POST /projects"
  target    = "integrations/${aws_apigatewayv2_integration.projects.id}"
}

resource "aws_apigatewayv2_route" "projects_get_id" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /projects/{id+}"
  target    = "integrations/${aws_apigatewayv2_integration.projects.id}"
}

resource "aws_apigatewayv2_route" "projects_put_id" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "PUT /projects/{id+}"
  target    = "integrations/${aws_apigatewayv2_integration.projects.id}"
}

resource "aws_apigatewayv2_route" "projects_delete_id" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "DELETE /projects/{id+}"
  target    = "integrations/${aws_apigatewayv2_integration.projects.id}"
}

resource "aws_apigatewayv2_route" "projects_options" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "OPTIONS /projects"
  target    = "integrations/${aws_apigatewayv2_integration.projects.id}"
}

resource "aws_apigatewayv2_route" "projects_options_id" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "OPTIONS /projects/{id+}"
  target    = "integrations/${aws_apigatewayv2_integration.projects.id}"
}

#DynamoDB lambda funtion url
resource "aws_lambda_function_url" "projects_api" {
  function_name      = aws_lambda_function.projects.function_name
  authorization_type = "NONE"

  cors {
    allow_credentials = true
    allow_origins     = var.allowed_origins
    allow_methods     = ["*"]
    allow_headers     = ["*"]
    max_age          = 86400
  }
}

# Lambda Function URL permission (required as of October 2024)
resource "aws_lambda_permission" "function_url_invoke" {
  statement_id           = "FunctionURLAllowPublicAccess"
  action                 = "lambda:InvokeFunctionUrl"
  function_name          = aws_lambda_function.projects.function_name
  principal              = "*"
  function_url_auth_type = "NONE"
}

# Also keep the InvokeFunction permission for compatibility
resource "aws_lambda_permission" "function_invoke" {
  statement_id  = "AllowPublicInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.projects.function_name
  principal     = "*"
}

output "dynamodb_function_url" {
  value = aws_lambda_function_url.projects_api.function_url
}

# Airtable Lambda Function
resource "aws_lambda_function" "airtable" {
  filename         = "${path.module}/../functions/airtable/lambda.zip"
  function_name    = "${var.app_name}-${var.environment}-airtable"
  role            = aws_iam_role.lambda_role.arn
  handler         = "index.getRecords"
  source_code_hash = filebase64sha256("${path.module}/../functions/airtable/lambda.zip")
  runtime         = "nodejs22.x"
  timeout         = 30
  memory_size     = 512  # Increased from default 128MB to handle large dataset

  environment {
    variables = {
      SECRET_NAME    = "prod/design-assistant/api-keys"
      ALLOWED_ORIGIN = var.allowed_origins[0]
      ENVIRONMENT    = var.environment
    }
  }
}

# Lambda Function URL for Airtable (bypasses API Gateway)
resource "aws_lambda_function_url" "airtable" {
  function_name      = aws_lambda_function.airtable.function_name
  authorization_type = "NONE"  # Public access
  
  cors {
    allow_origins     = var.allowed_origins  # Restricted to your CloudFront domains
    allow_methods     = ["GET"]
    allow_headers     = ["content-type"]
    expose_headers    = ["content-length", "date"]
    max_age          = 86400
  }
}

# Resource-based policy to allow public invocation via Function URL
resource "aws_lambda_permission" "airtable_function_url" {
  statement_id           = "AllowPublicFunctionURLInvoke"
  action                 = "lambda:InvokeFunctionUrl"
  function_name          = aws_lambda_function.airtable.function_name
  principal              = "*"
  function_url_auth_type = "NONE"
}

resource "aws_lambda_permission" "airtable_function_url_invoke" {
  statement_id  = "AllowPublicInvokeFunction"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.airtable.function_name
  principal     = "*"
}

# Output the Function URL
output "airtable_function_url" {
  description = "Direct Lambda Function URL for Airtable"
  value       = aws_lambda_function_url.airtable.function_url
}

# OpenRouter Lambda Function
resource "aws_lambda_function" "openrouter" {
  filename         = "${path.module}/../functions/openrouter/lambda.zip"
  function_name    = "${var.app_name}-${var.environment}-openrouter"
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.handler"
  source_code_hash = filebase64sha256("${path.module}/../functions/openrouter/lambda.zip")
  runtime          = "nodejs22.x"
  timeout          = 300

  environment {
    variables = {
      SECRET_NAME    = "prod/design-assistant/api-keys"
      ALLOWED_ORIGIN = var.allowed_origins[0]
      ENVIRONMENT    = var.environment
    }
  }
}

# Lambda Function URL for OpenRouter (bypasses API Gateway)
resource "aws_lambda_function_url" "openrouter" {
  function_name      = aws_lambda_function.openrouter.function_name
  authorization_type = "NONE"

  cors {
    allow_origins = var.allowed_origins
    allow_methods = ["POST"]
    allow_headers = ["content-type"]
    max_age       = 86400
  }
}

# Resource-based policy to allow public invocation via Function URL
resource "aws_lambda_permission" "openrouter_function_url" {
  statement_id           = "AllowPublicFunctionURLInvoke"
  action                 = "lambda:InvokeFunctionUrl"
  function_name          = aws_lambda_function.openrouter.function_name
  principal              = "*"
  function_url_auth_type = "NONE"
}

resource "aws_lambda_permission" "openrouter_function_invoke" {
  statement_id  = "AllowPublicInvokeFunction"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.openrouter.function_name
  principal     = "*"
}

# Output the Function URL
output "openrouter_function_url" {
  description = "Direct Lambda Function URL for OpenRouter"
  value       = aws_lambda_function_url.openrouter.function_url
}

# Usage Lambda Function
resource "aws_lambda_function" "usage" {
  filename         = "${path.module}/../functions/usage/lambda.zip"
  function_name    = "${var.app_name}-${var.environment}-usage"
  role             = aws_iam_role.lambda_role.arn
  handler          = "index.handler"
  source_code_hash = filebase64sha256("${path.module}/../functions/usage/lambda.zip")
  runtime          = "nodejs22.x"
  timeout          = 30

  environment {
    variables = {
      USAGE_TABLE_NAME   = aws_dynamodb_table.usage.name
      PROMPTS_TABLE_NAME = aws_dynamodb_table.prompts.name
      ALLOWED_ORIGINS    = join(",", var.allowed_origins)
    }
  }
}

# Lambda Function URL for Usage
resource "aws_lambda_function_url" "usage" {
  function_name      = aws_lambda_function.usage.function_name
  authorization_type = "NONE"

  cors {
    allow_origins = var.allowed_origins
    allow_methods = ["GET", "POST"]
    allow_headers = ["content-type"]
    max_age       = 86400
  }
}

resource "aws_lambda_permission" "usage_function_url" {
  statement_id           = "AllowPublicFunctionURLInvoke"
  action                 = "lambda:InvokeFunctionUrl"
  function_name          = aws_lambda_function.usage.function_name
  principal              = "*"
  function_url_auth_type = "NONE"
}

resource "aws_lambda_permission" "usage_function_invoke" {
  statement_id  = "AllowPublicInvokeFunction"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.usage.function_name
  principal     = "*"
}

output "usage_function_url" {
  description = "Direct Lambda Function URL for Usage tracking"
  value       = aws_lambda_function_url.usage.function_url
}

# S3 policy for project content storage
resource "aws_iam_role_policy" "lambda_s3_policy" {
  name = "${var.app_name}-lambda-s3-policy"
  role = aws_iam_role.lambda_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject",
          "s3:DeleteObject"
        ]
        Resource = "${aws_s3_bucket.project_content.arn}/*"
      }
    ]
  })
}

# -------------------------------------------------------------------------------------
# Referring link & page DB: scheduled sitemap sync & SQS crawl worker to run in backend
# -------------------------------------------------------------------------------------

# Crawl queue with a dead-letter queue for pages that keep failing
resource "aws_sqs_queue" "links_dlq" {
  name                      = "${var.app_name}-${var.environment}-links-dlq"
  message_retention_seconds = 1209600 # 14 days
}

resource "aws_sqs_queue" "links_crawl" {
  name                       = "${var.app_name}-${var.environment}-links-crawl"
  visibility_timeout_seconds = 360 # 6x the worker timeout, as AWS recommends for SQS triggers
  message_retention_seconds  = 345600

  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.links_dlq.arn
    maxReceiveCount     = 3
  })
}

# Permissions for the new tables and queue (the role is shared with the other Lambdas)
resource "aws_iam_role_policy" "lambda_links_policy" {
  name = "${var.app_name}-lambda-links-policy"
  role = aws_iam_role.lambda_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "dynamodb:PutItem",
          "dynamodb:GetItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem",
          "dynamodb:BatchWriteItem",
          "dynamodb:BatchGetItem",
          "dynamodb:Query",
          "dynamodb:Scan"
        ]
        Resource = [
          aws_dynamodb_table.pages.arn,
          "${aws_dynamodb_table.pages.arn}/index/*",
          aws_dynamodb_table.links.arn,
          "${aws_dynamodb_table.links.arn}/index/*",
        ]
      },
      {
        Effect = "Allow"
        Action = [
          "sqs:SendMessage",
          "sqs:ReceiveMessage",
          "sqs:DeleteMessage",
          "sqs:GetQueueAttributes"
        ]
        Resource = aws_sqs_queue.links_crawl.arn
      }
    ]
  })
}

# Sync Lambda: diffs the sitemap against the pages table and queues crawl jobs
resource "aws_lambda_function" "links_sync" {
  filename         = "${path.module}/../functions/links/lambda.zip"
  function_name    = "${var.app_name}-${var.environment}-links-sync"
  role             = aws_iam_role.lambda_role.arn
  handler          = "sync.handler"
  source_code_hash = filebase64sha256("${path.module}/../functions/links/lambda.zip")
  runtime          = "nodejs22.x"
  timeout          = 900
  memory_size      = 512

  environment {
    variables = {
      PAGES_TABLE  = aws_dynamodb_table.pages.name
      LINKS_TABLE  = aws_dynamodb_table.links.name
      QUEUE_URL    = aws_sqs_queue.links_crawl.url
      SITEMAP_URLS = var.links_sitemap_urls
      MAX_UNPUBLISH_RATIO = "0.1"
      MAX_CRAWL_JOBS = "5000" # TODO: Review costs before increasing this further
    }
  }
}

# Crawl worker: fetches one page, extracts hreflang pair and links, writes to DynamoDB
resource "aws_lambda_function" "links_crawl" {
  filename         = "${path.module}/../functions/links/lambda.zip"
  function_name    = "${var.app_name}-${var.environment}-links-crawl"
  role             = aws_iam_role.lambda_role.arn
  handler          = "crawl.handler"
  source_code_hash = filebase64sha256("${path.module}/../functions/links/lambda.zip")
  runtime          = "nodejs22.x"
  timeout          = 60
  memory_size      = 512

  environment {
    variables = {
      PAGES_TABLE = aws_dynamodb_table.pages.name
      LINKS_TABLE = aws_dynamodb_table.links.name
    }
  }
}

resource "aws_lambda_event_source_mapping" "links_crawl" {
  event_source_arn        = aws_sqs_queue.links_crawl.arn
  function_name           = aws_lambda_function.links_crawl.arn
  batch_size              = 5
  function_response_types = ["ReportBatchItemFailures"]

  # Caps parallel crawlers, which is what limits request rate to canada.ca
  scaling_config {
    maximum_concurrency = 2
  }

  depends_on = [aws_iam_role_policy.lambda_links_policy]
}

# Schedule: daily at 07:00 UTC
resource "aws_cloudwatch_event_rule" "links_sync" {
  name                = "${var.app_name}-${var.environment}-links-sync"
  schedule_expression = "cron(0 7 * * ? *)"
}

resource "aws_cloudwatch_event_target" "links_sync" {
  rule = aws_cloudwatch_event_rule.links_sync.name
  arn  = aws_lambda_function.links_sync.arn
}

resource "aws_lambda_permission" "links_sync_schedule" {
  statement_id  = "AllowEventBridgeInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.links_sync.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.links_sync.arn
}

# -------------------------------------------------------------------------------------
# Referring link & page DB: readonly lookups for front end
# -------------------------------------------------------------------------------------

# Dedicated read-only role, separate from the shared lambda_role
resource "aws_iam_role" "links_api_role" {
  name = "${var.app_name}-links-api-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "links_api_basic_execution" {
  role       = aws_iam_role.links_api_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy" "links_api_policy" {
  name = "${var.app_name}-links-api-policy"
  role = aws_iam_role.links_api_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "dynamodb:GetItem",
          "dynamodb:BatchGetItem",
          "dynamodb:Query"
        ]
        Resource = [
          aws_dynamodb_table.pages.arn,
          "${aws_dynamodb_table.pages.arn}/index/*",
          aws_dynamodb_table.links.arn,
          "${aws_dynamodb_table.links.arn}/index/*",
        ]
      }
    ]
  })
}

resource "aws_lambda_function" "links_api" {
  filename         = "${path.module}/../functions/links/lambda.zip"
  function_name    = "${var.app_name}-${var.environment}-links-api"
  role             = aws_iam_role.links_api_role.arn
  handler          = "lookups.handler"
  source_code_hash = filebase64sha256("${path.module}/../functions/links/lambda.zip")
  runtime          = "nodejs22.x"
  timeout          = 30
  memory_size      = 512

  environment {
    variables = {
      PAGES_TABLE = aws_dynamodb_table.pages.name
      LINKS_TABLE = aws_dynamodb_table.links.name
    }
  }
}

# Lambda Function URL for the links API
resource "aws_lambda_function_url" "links_api" {
  function_name      = aws_lambda_function.links_api.function_name
  authorization_type = "NONE"

  cors {
    allow_origins = var.allowed_origins
    allow_methods = ["GET", "POST"]
    allow_headers = ["content-type"]
    max_age       = 86400
  }
}

resource "aws_lambda_permission" "links_api_function_url" {
  statement_id           = "AllowPublicFunctionURLInvoke"
  action                 = "lambda:InvokeFunctionUrl"
  function_name          = aws_lambda_function.links_api.function_name
  principal              = "*"
  function_url_auth_type = "NONE"
}

resource "aws_lambda_permission" "links_api_function_invoke" {
  statement_id  = "AllowPublicInvokeFunction"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.links_api.function_name
  principal     = "*"
}

output "links_api_function_url" {
  description = "Direct Lambda Function URL for link lookups"
  value       = aws_lambda_function_url.links_api.function_url
}