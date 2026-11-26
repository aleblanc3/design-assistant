import { OutputKey, ProblemPromptKey, PromptConfig, RoleKey } from './prompt.model';

export const ProblemPrompts: Record<ProblemPromptKey, PromptConfig> = {
  [ProblemPromptKey.AlertsProblems]: {
    role: RoleKey.ContentDesigner,
    // Some exceptions are intentionally repeated in the category and output rules
    // because the model previously ignored or narrowed single mentions.
    // Do not deduplicate without retesting top-level headings and temporary updates.
    task: `Analyze the reportable alerts in the supplied page context and identify applicable content design, accessibility, and markup issues.
Return issue reports only. Do not rewrite alert HTML.

### Analysis instructions
{
  "inputs": {
    "alerts": "Array of alert HTML strings in source order. Each item is the full alert container.",
    "pageSignals": {
      "optional": true,
      "description": "Structured page-level hints such as title, h1, pageTypeSignal, introSnippet, and h2Headings."
    },
    "alertPlacementContext": {
      "optional": true,
      "description": "Structured per-alert placement hints such as is_before_first_h2, position_percent_in_main, nearest_h2_above, nearest_h2_below, section snippets, and alert clustering."
    },
    "alertSignals": {
      "optional": true,
      "description": "Precomputed per-alert structural signals such as alert_type, heading metadata, expected_heading_tag, heading_hierarchy_valid, paragraph_count, substantive_paragraph_count, link_support_paragraph_count, substantive_sentence_count, substantive_text_length_chars, standalone_link_count, link count, links, hidden-content flags, and adjacency flags."
    }
  },
  "workflow": [
    { "step": 1,
      "name": "enumerate_alerts",
      "instruction": "Analyze every alert in the alerts array. Use array order as alert_index, starting at 1."
    },
    { "step": 2,
      "name": "use_structured_context",
      "instruction": "Use pageSignals as page-level evidence when present. For each alert, use the alertPlacementContext and alertSignals objects with the same alert_index as primary evidence. If structured context conflicts with a weak inference from raw HTML, prefer the structured context."
    },
    { "step": 3,
      "name": "check_simple_issues",
      "instruction": "For each alert, evaluate every simple issue category independently."
    },
    { "step": 4,
      "name": "check_complex_issues",
      "instruction": "For each alert, evaluate every complex issue category independently."
    }
  ],
  "simpleIssueCategories": [
    { "name": "Misuse",
      "rule": "Do not use alerts for standard process steps, permanent or routine page content, low-risk warnings, decorative emphasis, or low-significance facts that do not represent a meaningful change for users. Alerts may appropriately communicate important temporary legislative or policy developments, legislation receiving Royal Assent, changes to benefits or rebates, filing or payment obligations, deadlines, relief measures, transitional rules, or service availability and processing. Do not report Misuse solely because an alert is informational or is not an urgent warning or service disruption. Use the alert content, pageTypeSignal, title, and h1 to assess whether the update is significant, temporary, and appropriate for the page."
    },
    { "name": "Too wordy",
      "rule": "Assess wordiness using substantive explanatory prose. Use substantive_paragraph_count, substantive_sentence_count, and substantive_text_length_chars as primary evidence when available; use paragraph_count and text_length_chars only as fallback supporting evidence. link_support_paragraph_count and standalone_link_count describe link structure, not additional prose. Flag avoidable detail, multiple substantive paragraphs, or more than 2 substantive sentences unless the sentences are short. Do not count a short standalone link lead-in, a paragraph containing only a standalone link, or link-only list items toward paragraph or sentence thresholds. Do not report Too wordy solely because an alert contains one substantive paragraph followed by valid link-support structure. For genuinely long content, recommend a short summary linking to the full details."
    },
    { "name": "Generic titles",
      "rule": "Flag headings such as Note, Info, Important, or New. Alert titles must be descriptive."
    },
    { "name": "Unclear impact",
      "rule": "The alert must explain any consequence that is not obvious to the user, and not just state a fact."
    },
    { "name": "Outdated",
      "rule": "Flag past dates, expired notices, or resolved events. Alerts are temporary."
    },
    { "name": "Missing heading",
      "rule": "Alerts must contain an appropriate heading pattern when a heading is needed for scanability and context. Use has_heading, heading_level, heading_source, and heading_tag as evidence. Recommend a descriptive heading and do not suggest generic labels such as Note, Important, Info, or New."
    },
    { "name": "Wrong type",
      "rule": "The alert type must match the severity; use alert_type as evidence. For example, use alert-info (blue) for updates, clarifications, delays, expected outages; use alert-warning (yellow/orange) for unexpected outages, serious service disruptions or termination, possible consequences of an action or inaction; use alert-danger (red) only rarely, for situations that could place someone in danger, or an issue that could cause them to be unable to complete their task."
    },
    { "name": "Hidden content",
      "rule": "Do not use accordions, expand-collapse patterns, or hidden content inside alerts. Alert content must be visible; use has_hidden_content as evidence."
    },
    { "name": "Wrong component",
      "rule": "Do not use alerts for content better handled by another component, such as labels for New items. These alerts should usually be removed."
    },
    { "name": "Too many links",
      "rule": "Limit alerts to one primary link when possible. Use link_count, has_multiple_links, and links as evidence and for link-related recommendations."
    },
    { "name": "Wrong placement",
      "rule": "Flag only when an alert applies to specific content but is placed globally or far from the relevant section. Use h2Headings, nearest_h2_above, nearest_h2_below, is_before_first_h2, position_percent_in_main, and nearby section snippets as supporting evidence. Do not flag an alert solely because it appears before the first substantive section."
    },
    { "name": "Alert overload",
      "rule": "Flag multiple stacked or clustered alerts that may create alert fatigue. Use the full set of placement objects, previous_sibling_is_alert, next_sibling_is_alert, and adjacent_alert_cluster_size to assess clustering. Return only one Alert overload issue for each adjacent cluster and assign it to the first alert in that cluster; describe the cluster rather than treating each alert as an independent overload issue. Recommend reviewing whether each alert is still necessary and current, removing outdated alerts, incorporating ongoing information into the relevant page content, or moving it to a more relevant page. Retain alerts only for important, time-sensitive information."
    },
    { "name": "Low relevance",
      "rule": "On home, landing, or broad overview pages, alerts should apply to more than half of the audience. Use pageTypeSignal, title, and h1 to assess whether an alert is narrowly targeted relative to the page."
    },
    { "name": "Incorrect hierarchy",
      "rule": "Alert headings must be one semantic level below their structural parent section heading. Use expected_heading_tag and heading_hierarchy_valid as the primary evidence. An alert directly after the H1 correctly uses H2. Inside an H2 section use H3, inside an H3 section use H4, and continue one semantic level deeper as needed. Ignore headings inside other alerts, utility headings such as Note or Notes, and headings contained in a preceding closed panel when the alert is outside that panel. A heading in a sibling component does not make the alert its subsection. Determine hierarchy from semantic heading elements, not styling classes. Do not report styling-class differences as hierarchy problems."
    },
    { "name": "Nothing actionable",
      "rule": "If no next-step link exists, flag the alert to confirm that none is needed or whether it needs to be deleted and the information added to the page instead."
    }
  ],
  "complexIssueCategories": [
    { "name": "Focus order",
      "rule": "Ensure the alert's logical reading order is preserved and not skipped by assistive technologies."
    },
    { "name": "Content clarity",
      "rule": "Use plain language and keep the reading level around Grade 6-8."
    },
    { "name": "Non-text content",
      "rule": "Images and icons need descriptive alternatives."
    },
    { "name": "Missing alert semantics",
      "rule": "Flag visually styled alerts whose alert or notice purpose is not programmatically identifiable to assistive technologies. Do not use this category for missing headings or defects covered by another category. Recommend design-system review only. Do not recommend role=alert, role=status, aria-live, or any other unapproved semantic markup for static content."
    },
    { "name": "Accessibility/code",
      "rule": "Flag accessibility or semantic markup defects not covered by another issue category. Evaluate heading hierarchy from semantic heading elements rather than styling classes."
    }
  ],
  "outputRules": {
    "requirements": [
      "Include the alert number in the description, for example: Alert 2: ...",
      "Emit a separate issue item for every category that applies to each alert, except Alert overload, which must be emitted only once per adjacent alert cluster.",
      "Do not emit Misuse solely because an alert is informational or is not an urgent warning or service disruption. Important temporary legislative, policy, benefit, rebate, filing, payment, deadline, relief, transitional, or service updates may appropriately use an alert.",
      "Do not emit Incorrect hierarchy when the matching alertSignals entry has heading_hierarchy_valid set to true."
    ]
  }
}`,
    rubric: [],
    output: OutputKey.Json,
    jsonSchema: `{
  "type": "object",
  "required": ["issues"],
  "properties": {
    "issues": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "alert_index",
          "issue_category",
          "description",
          "recommendation",
          "severity"
        ],
        "properties": {
          "alert_index": { "type": "integer", "minimum": 1 },
          "issue_category": { "type": "string" },
          "description": { "type": "string" },
          "recommendation": { "type": "string" },
          "severity": { "type": "string", "enum": ["High", "Medium", "Low"] }
        }
      }
    }
  }
}`,
    available: false,
  },
};
