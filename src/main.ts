async function copyToClipboard(text: string) {
  try {
    if (!navigator.clipboard) {
      throw new Error("Clipboard API not available");
    }

    await navigator.clipboard.writeText(text);
    console.log("Copied to clipboard", text);
  } catch (e) {
    console.error("Failed to copy to clipboard", e);
  }
}

function handleButtonClick(event: MouseEvent) {
  event.preventDefault();
  event.stopImmediatePropagation();

  const button = event.target as HTMLButtonElement;
  const span = button.nextElementSibling as HTMLSpanElement;

  copyToClipboard(span.textContent!);
}

[...document.querySelectorAll("span")]
  .filter((span) => !!span.textContent)
  .filter((span) => RegExp(/^SIM-\d+$/).exec(span.textContent!))
  .forEach((span) => {
    const button = document.createElement("button");

    button.className = "copy-button";
    button.textContent = "Copy";
    button.onclick = handleButtonClick;

    const parent = span.parentElement;

    parent?.insertBefore(button, span);
    span.style.border = "1px solid red";
  });
