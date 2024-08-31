import { copyToClipboard } from "../../utils/copyToClipboard";

export function CopyTicketNumberButton(ticketNumber: string) {
  const copyButton = document.createElement("button");
  copyButton.textContent = "📋";
  copyButton.style.appearance = "none";
  copyButton.style.background = "transparent";
  copyButton.style.border = "none";

  copyButton.onclick = (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    copyToClipboard(ticketNumber).then(() => {
      console.info("Copied to clipboard", ticketNumber);

      copyButton.textContent = "✅";
      setTimeout(() => {
        copyButton.textContent = "📋";
      }, 3_000);
    });
  };

  return copyButton;
}
