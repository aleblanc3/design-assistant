export interface LinkWritingPromptOptions {
  hasTooManyLinksIssue: boolean;
}

export interface LinkWritingRule {
  id: string;
  text: string;
}

export const LinkWritingPromptRuleGroups: Readonly<Record<'common' | 'preserveLinks' | 'tooManyLinks', readonly LinkWritingRule[]>> = {
  common: [
    {
      id: 'L2_keep_url_change_text',
      text: 'Link text may be rewritten, but any kept link must keep its original URL. Do not convert a kept link to plain text, omit it, or replace it with placeholder text.',
    },
    {
      id: 'L3_descriptive_text',
      text: 'Link text must clearly describe the intended destination using available context (URL path/slug, current link text, and surrounding sentence), and avoid inventing destination details not supported by that context.',
    },
    {
      id: 'L4_avoid_duplicate_link_text',
      text: 'Avoid duplicate wording. Do not repeat the linked phrase outside the anchor when meaning is preserved. Keep the destination phrase in the link. For phrasal lead-ins such as "Find out" or "Learn about", let the link text complete the phrase instead of repeating the object before the anchor. Avoid using "see" before links; use inclusive alternatives like "refer to" or "visit". When a link is present, prefer a short plain-text lead-in plus unique link text, with minimal repeated wording outside the anchor.',
    },
    {
      id: 'L5_no_vague_anchor_text',
      text: 'Never use vague anchor text (for example: "click here", "here", "learn more", or similar).',
    },
    {
      id: 'L6_sentence_end_preferred',
      text: 'Prefer placing links at the end of their sentence.',
    },
    {
      id: 'L7_standalone_link_structure',
      text: 'If a link is an entire sentence, or if a sentence mainly directs the user to a link, move the link direction to a new paragraph; do not append it to an explanatory sentence. When possible, place that standalone link paragraph last in the content. Add a natural lead-in before the anchor when the standalone link text does not already contain a clear action verb.',
    },
    {
      id: 'L7a_multiple_standalone_links_list',
      text: 'When more than one standalone link must be kept at the end of the content, use one lead-in paragraph followed by <ul class="list-unstyled"> with one link per <li>. Do not use separate standalone link paragraphs for multiple final links.',
    },
    {
      id: 'L7b_standalone_link_terminal_punctuation',
      text: 'Do not put a period or other terminal punctuation after the closing anchor in a standalone link sentence or paragraph.',
    },
    {
      id: 'L10_concise_link_text',
      text: 'Keep link text concise when possible. Remove details already present in the alert or page context (for example, " - Canada.ca" is not needed).',
    },
    {
      id: 'L11_find_out_usage',
      text: 'Do not use "Find out:" with a colon. Use "Find out" only when the anchor text completes it naturally, for example "Find out how to...", "Find out if...", or "Find out whether...". Do not use "Find out" before imperative link text such as "Get...", "Apply...", or "Register...".',
    },
    {
      id: 'L12_lead_in_selection',
      text: 'Choose exactly one link treatment based on the intended user action; none is the default. Use "Refer to:" when the user must consult a specific reference, form, service, requirement, or procedure. Use "For details:" when the destination provides supporting detail or additional context. Use "Learn about" without a colon when the destination is an explanatory topic or overview page and the anchor text naturally completes the phrase. Use "Learn more:" when the destination provides optional background or status information. Use no lead-in when the anchor text already expresses a clear action. Keep "Learn about" and any required article outside the anchor; keep only the destination name inside the anchor, for example "Learn about the <a>Canada Groceries and Essentials Benefit</a>". Avoid repeating the topic noun outside the link if the anchor already names it.',
    },
    {
      id: 'L12a_avoid_combined_lead_ins',
      text: 'Use one concise lead-in when one is needed. Avoid combining lead-ins that serve the same purpose, such as "For details, refer to". When replacing a wordy "For more information" construction containing "visit", "refer to", or "go to", remove the wordy construction, infer the link purpose from the alert, anchor text, and URL, and select exactly one meaning-based treatment. Do not automatically map these constructions to any one lead-in. Preserve an existing concise "For details:" lead-in when it reads naturally. Combine lead-in phrases only when each phrase adds meaning that is necessary to understand the link.',
    },
    {
      id: 'L13_action_link_no_lead_in',
      text: 'If a standalone link already contains a clear action verb, do not add lead-in text such as "Refer to:", "For details:", or "Learn more:". Examples include standalone links such as "View CRA processing times", "Get an access code", "Apply for benefits", "Register a business", "Sign in or register for a CRA account", "File your return online", "Review the proposed rates", "Find out how to get an access code", and "How to get an access code".',
    },
  ],
  preserveLinks: [
    {
      id: 'L9_do_not_remove_without_issue',
      text: 'When a too-many-links issue is not identified, preserve all original links.',
    },
  ],
  tooManyLinks: [
    {
      id: 'L8_remove_only_when_too_many',
      text: "For a too-many-links issue, retain at most two original links. Keep two only when they serve distinct, complementary purposes—for example, one provides information or guidance and the other provides account access or a direct action. Otherwise, keep the single link most relevant to the alert's primary purpose. Prefer information central to the alert unless completing an action is its primary purpose. If more than two seem necessary, the alert's purpose is unclear; keep only the single most relevant link. Base the choice on the alert text, link text, URL, and surrounding context; do not assume unsupported destination details. Preserve original href values.",
    },
  ],
};

export function getLinkWritingPromptRules(options: LinkWritingPromptOptions): string[] {
  const conditionalRules = options.hasTooManyLinksIssue ? LinkWritingPromptRuleGroups.tooManyLinks : LinkWritingPromptRuleGroups.preserveLinks;
  return [...LinkWritingPromptRuleGroups.common, ...conditionalRules].map((rule) => rule.text);
}
