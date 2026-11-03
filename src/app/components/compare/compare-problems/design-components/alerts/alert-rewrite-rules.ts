import { AlertRewritePromptRules, AlertRewriteRules } from '../../../../../common/prompts/alert-rewrite.prompt';

interface AlertRewriteSharedGuidanceJson {
  styleRules: string[];
  exampleRules: string[];
}

const ALERT_REWRITE_SHARED_GUIDANCE_PATH = new URL('skills/alerts/alerts-rewriting/references/shared-rewrite-guidance.json', document.baseURI).toString();

let alertRewriteRulesCache: AlertRewritePromptRules | null = null;

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string' && item.trim().length > 0);
}

function toValidatedSharedGuidance(raw: unknown): AlertRewriteSharedGuidanceJson | null {
  if (!raw || typeof raw !== 'object') return null;
  const root = raw as Record<string, unknown>;
  const styleRules = root['styleRules'];
  const exampleRules = root['exampleRules'];

  if (!isStringArray(styleRules) || !isStringArray(exampleRules)) {
    return null;
  }

  return {
    styleRules,
    exampleRules,
  };
}

function mergeSharedGuidance(rules: AlertRewritePromptRules, sharedGuidance: AlertRewriteSharedGuidanceJson): AlertRewritePromptRules {
  return {
    ...rules,
    alertRewrite: {
      ...rules.alertRewrite,
      styleRulesBase: [...sharedGuidance.styleRules, ...rules.alertRewrite.styleRulesBase],
      styleRulesWithExamples: [...sharedGuidance.exampleRules, ...rules.alertRewrite.styleRulesWithExamples],
    },
  };
}

export async function getAlertRewriteRules(): Promise<AlertRewritePromptRules> {
  if (alertRewriteRulesCache) return alertRewriteRulesCache;

  try {
    const sharedGuidanceResponse = await fetch(ALERT_REWRITE_SHARED_GUIDANCE_PATH);
    if (!sharedGuidanceResponse.ok) {
      throw new Error(`Failed to load shared alert rewrite guidance (${sharedGuidanceResponse.status}).`);
    }
    const sharedGuidancePayload = (await sharedGuidanceResponse.json()) as unknown;
    const sharedGuidance = toValidatedSharedGuidance(sharedGuidancePayload);
    if (!sharedGuidance) {
      throw new Error('Invalid shared alert rewrite guidance JSON schema.');
    }
    alertRewriteRulesCache = mergeSharedGuidance(AlertRewriteRules, sharedGuidance);
  } catch (err) {
    console.warn('Unable to load shared alert rewrite guidance; using live runtime rules without shared guidance.', err);
    alertRewriteRulesCache = AlertRewriteRules;
  }

  return alertRewriteRulesCache;
}
