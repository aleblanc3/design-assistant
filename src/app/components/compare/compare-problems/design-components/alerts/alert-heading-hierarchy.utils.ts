const UTILITY_HEADING_LABELS = new Set(['on this page', 'sur cette page', 'note', 'notes', 'remarque', 'remarques']);

function normalizeHeadingLabel(value: string): string {
  return value
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/[:：]\s*$/g, '');
}

export function isAlertHierarchyUtilityHeading(heading: Element): boolean {
  return UTILITY_HEADING_LABELS.has(normalizeHeadingLabel(heading.textContent || ''));
}

function isHeadingRelevantToAlert(heading: Element, alertElement: Element): boolean {
  if (heading.closest('.alert, .pagedetails')) return false;
  if (isAlertHierarchyUtilityHeading(heading)) return false;

  const containingPanel = heading.closest('.panel');
  return !containingPanel || containingPanel.contains(alertElement);
}

export function getExpectedAlertHeadingTag(alertElement: Element): string {
  let nearestPageHeading: Element | null = null;
  const pageHeadings = Array.from(alertElement.ownerDocument.querySelectorAll('h1, h2, h3, h4, h5, h6')).filter((heading) => isHeadingRelevantToAlert(heading, alertElement));

  for (const heading of pageHeadings) {
    if (heading.compareDocumentPosition(alertElement) & Node.DOCUMENT_POSITION_FOLLOWING) {
      nearestPageHeading = heading;
    }
  }

  const parentLevel = Number(nearestPageHeading?.tagName.slice(1)) || 1;
  return `h${Math.min(parentLevel + 1, 6)}`;
}
