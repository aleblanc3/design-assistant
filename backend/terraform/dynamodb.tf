# Table #1 - Projects
resource "aws_dynamodb_table" "projects" {
  name           = "${var.app_name}-projects"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "id"
  
  attribute {
    name = "id"
    type = "S"
  }
  
  attribute {
    name = "owner"
    type = "S"
  }
  
  attribute {
    name = "repo"
    type = "S"
  }
  
  # Global secondary index for querying all public projects
  global_secondary_index {
    name            = "owner-repo-index"
    hash_key        = "owner"
    range_key       = "repo"
    projection_type = "ALL"
  }
  
  # Enable point-in-time recovery for backups
  point_in_time_recovery {
    enabled = true
  }
  
  tags = {
    Environment = var.environment
    Project     = var.app_name
  }
}

# Table #2 - Usage statistics
resource "aws_dynamodb_table" "usage" {
  name         = "${var.app_name}-usage"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "pk"
  range_key    = "sk"

  attribute {
    name = "pk"
    type = "S"
  }

  attribute {
    name = "sk"
    type = "S"
  }

  point_in_time_recovery {
    enabled = true
  }

  tags = {
    Environment = var.environment
    Project     = var.app_name
  }
}

# Table #3 - AI prompt versions
resource "aws_dynamodb_table" "prompts" {
  name         = "${var.app_name}-prompts"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "promptHash"

  attribute {
    name = "promptHash"
    type = "S"
  }

  point_in_time_recovery {
    enabled = true
  }

  tags = {
    Environment = var.environment
    Project     = var.app_name
  }
}

# Table #4 - Pages (one item per page, soft-deleted when unpublished)
resource "aws_dynamodb_table" "pages" {
  name         = "${var.app_name}-pages"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "pk"
  range_key    = "path"

  attribute {
    name = "pk"
    type = "S"
  }

  attribute {
    name = "path"
    type = "S"
  }

  attribute {
    name = "unpublishedPk"
    type = "S"
  }

  attribute {
    name = "unpublishedAt"
    type = "S"
  }

  # Sparse index: only unpublished pages carry these attributes
  global_secondary_index {
    name            = "unpublished"
    hash_key        = "unpublishedPk"
    range_key       = "unpublishedAt"
    projection_type = "ALL"
  }

  # Keeps the unpublishedAt history, which can't be rebuilt by recrawling
  point_in_time_recovery {
    enabled = true
  }

  tags = {
    Environment = var.environment
    Project     = var.app_name
  }
}

# Table #5 - Referring Links (one item per edge; outgoing links, plus referrers via the GSI)
resource "aws_dynamodb_table" "links" {
  name         = "${var.app_name}-links"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "fromPath"
  range_key    = "kindTo"

  attribute {
    name = "fromPath"
    type = "S"
  }

  attribute {
    name = "kindTo"
    type = "S"
  }

  attribute {
    name = "toPath"
    type = "S"
  }

  attribute {
    name = "kindFrom"
    type = "S"
  }

  global_secondary_index {
    name            = "referrers"
    hash_key        = "toPath"
    range_key       = "kindFrom"
    projection_type = "KEYS_ONLY"
  }

  # No point-in-time recovery: edges can be rebuilt by recrawling

  tags = {
    Environment = var.environment
    Project     = var.app_name
  }
}