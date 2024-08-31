export async function copyToClipboard(text: string) {
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
