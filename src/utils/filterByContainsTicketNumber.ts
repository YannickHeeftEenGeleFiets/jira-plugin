export function filterByContainsTicketNumber(regex: RegExp) {
  return function (...nodes: (Node | HTMLSpanElement)[]) {
    return nodes
      .filter((node) => node instanceof HTMLElement && node.tagName === "SPAN")
      .filter((span) => !!span.textContent)
      .filter((span) => regex.exec(span.textContent!));
  };
}
