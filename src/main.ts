import { CopyTicketNumberButton } from "./components/jira/CopyTicketNumberButton";
import { filterByContainsTicketNumber } from "./utils/filterByContainsTicketNumber";

setInterval(() => {
  filterByContainsTicketNumber(RegExp(/^SIM-\d+$/))(
    ...document.querySelectorAll("span")
  ).forEach((span: Node | HTMLElement) => {
    console.groupCollapsed(`[${span.textContent}] Detected Jira ticket number`);
    console.info(span.parentElement);
    console.groupEnd();

    span.appendChild(CopyTicketNumberButton(span.textContent!));
  });
}, 1_000);
