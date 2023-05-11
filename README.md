# Unipd Moodle Autologin

## Description

The Unipd Moodle Autologin extension helps you automatically redirect and log in to the Single Sign-On (SSO) for accessing the Moodle and Uniweb platforms at the University of Padua.

## Installation

### Chrome Extension

Users of the Chrome browser can download and install the Chrome extension version from the [Chrome Web Store](https://chrome.google.com/webstore/detail/unipd-moodle-autologin/eljiobjmiknmjbocoaleahajekpkpoab?hl=it).

### Edge Extension

If you are using the Edge browser, you will need to manually install the extension by following these steps:

1. Download the compressed ZIP file from [here](https://github.com/Gexi0619/UnipdMoodleAutologin/releases/download/v1.0.2/v1.0.2-UnipdMoodleAutologin.zip) and extract it locally on your computer.
2. In the Edge browser, visit `edge://extensions/` . Enable the "Modalità sviluppatore" on the left-hand side of the page.
3. Click on "Carica decompressa" and select the directory where you extracted the files from the ZIP archive. The extension should now be installed and ready to use in your Edge browser.

### Safari Extension

Under development.

## Usage

1. Once the extension is successfully installed, you will see a pop-up window. Enter your login information on the page and click "Salva" (Save). You should now be automatically logged in to Moodle or Uniweb when you open their respective web pages.
2. If you need to update your login information or change your Unipd credentials, you can manually update them in the extension. Click on the extension's icon to open the pop-up page, make the necessary modifications to your login information, and click Save again.
3. To stop the automatic login, you can disable or uninstall the extension from your browser's extension management page.

## Features

1. SSO Autologin: For `https://shibidp.cca.unipd.it/idp/profile/SAML2/Redirect/SSO?execution=*`, the extension automatically fills in the saved Username, Password, and Usertype fields based on the user's personal login information and automatically clicks the login button.
2. Automatic Redirection: The extension performs automatic redirection for the following URLs:
   - `https://*.elearning.unipd.it/*` and `https://elearning.unipd.it/*`
   - `https://*.elearning.unipd.it/login/index.php` and `https://*.elearning.unipd.it/*/login/index.php`
   - `https://uniweb.unipd.it/*` For all Moodle links of our university, please visit https://www.unipd.it/elearning.
3. Privacy: The extension stores your login information in plaintext in your local Chrome storage and does not upload it to any cloud servers.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request.