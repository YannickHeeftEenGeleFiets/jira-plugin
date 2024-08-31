# Chrome Extension for Jira

<!-- vscode-markdown-toc -->

- 1. [Getting Started](#GettingStarted)
- 2. [Changing the ticket number format](#Changingtheticketnumberformat)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

This is a Chrome extension that allows you to quickly copy Jira ticket number from anywhere within Jira.

## 1. <a name='GettingStarted'></a>Getting Started

1. Clone the repository
2. Run `yarn install`
3. Run `yarn build`
4. Open Chrome and navigate to `chrome://extensions/`
5. Enable Developer mode
6. Click on `Load unpacked` and select the `dist` folder within this repository
7. The extension should now be installed and work automatically within Jira

## 2. <a name='Changingtheticketnumberformat'></a>Changing the ticket number format

In order to detect jira ticket numbers that do _not_ start with `SIM-`, you can simply change regex in `src/main.ts`, rebuild the extenssion and reload it in Chrome extensions page.
