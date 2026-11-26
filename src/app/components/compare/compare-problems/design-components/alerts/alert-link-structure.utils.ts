const STANDALONE_LINK_LEAD_IN = /^(?:for details|learn more|learn about(?: the)?|refer to|en savoir plus|pour en savoir plus|consultez|d[e\u00e9]tails)$/;

function normalizeLinkSupportText(value: string): string {
  return value
    .replace(/[\s\u00a0]+/g, ' ')
    .replace(/[:;,.!?\s]+$/g, '')
    .trim()
    .toLowerCase();
}

function hasHeadingUtilityClass(element: Element): boolean {
  return Array.from(element.classList).some((className) => /^h[1-6]$/i.test(className));
}

export function isStructurallyStandaloneLink(anchor: Element): boolean {
  const block = anchor.closest('p, li');
  if (!block || block.querySelectorAll('a').length !== 1) return false;

  const blockWithoutLink = block.cloneNode(true) as HTMLElement;
  blockWithoutLink.querySelector('a')?.remove();
  const remainingText = normalizeLinkSupportText(blockWithoutLink.textContent || '');
  return !remainingText || STANDALONE_LINK_LEAD_IN.test(remainingText);
}

export function countStructurallyStandaloneLinks(root: ParentNode): number {
  return Array.from(root.querySelectorAll('a')).filter((anchor) => isStructurallyStandaloneLink(anchor)).length;
}

function isLinkOnlyList(element: Element | null): boolean {
  if (!element?.matches('ul, ol')) return false;
  const items = Array.from(element.children).filter((child) => child.matches('li'));
  return !!items.length && items.every((item) => item.querySelectorAll('a').length === 1 && isStructurallyStandaloneLink(item.querySelector('a')!));
}

function isLinkSupportParagraph(paragraph: Element): boolean {
  const anchors = Array.from(paragraph.querySelectorAll('a'));
  if (anchors.length === 1 && isStructurallyStandaloneLink(anchors[0])) return true;

  const text = normalizeLinkSupportText(paragraph.textContent || '');
  return !!text && STANDALONE_LINK_LEAD_IN.test(text) && isLinkOnlyList(paragraph.nextElementSibling);
}

function countSentences(value: string): number {
  return (
    value
      .match(/[^.!?]+[.!?]?/g)
      ?.map((sentence) => sentence.trim())
      .filter((sentence) => !!sentence).length ?? 0
  );
}

export function getAlertProseMetrics(alertElement: Element): {
  paragraphCount: number;
  substantiveParagraphCount: number;
  linkSupportParagraphCount: number;
  substantiveSentenceCount: number;
  substantiveTextLengthChars: number;
  standaloneLinkCount: number;
} {
  const paragraphs = Array.from(alertElement.querySelectorAll('p')).filter((paragraph) => !!normalizeLinkSupportText(paragraph.textContent || '') && !hasHeadingUtilityClass(paragraph));
  const linkSupportParagraphs = paragraphs.filter((paragraph) => isLinkSupportParagraph(paragraph));
  const linkSupportSet = new Set(linkSupportParagraphs);
  const substantiveParagraphs = paragraphs.filter((paragraph) => !linkSupportSet.has(paragraph));
  const substantiveText = substantiveParagraphs.map((paragraph) => (paragraph.textContent || '').replace(/[\s\u00a0]+/g, ' ').trim()).join(' ');

  return {
    paragraphCount: paragraphs.length,
    substantiveParagraphCount: substantiveParagraphs.length,
    linkSupportParagraphCount: linkSupportParagraphs.length,
    substantiveSentenceCount: countSentences(substantiveText),
    substantiveTextLengthChars: substantiveText.length,
    standaloneLinkCount: countStructurallyStandaloneLinks(alertElement),
  };
}
