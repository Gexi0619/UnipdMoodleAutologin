# Unipd Moodle Autologin

## Description

The Unipd Moodle Autologin extension helps you automatically redirect and log in to the Single Sign-On (SSO) for accessing the Moodle and Uniweb platforms at the University of Padua.

## Installation

### Chrome Extension

Users of the Chrome browser can download and install the Chrome extension version from the [Chrome Web Store](https://chrome.google.com/webstore/category/extensions?hl=en).

### Edge Extension

Users of the Edge browser can download and install the Edge extension version from the [Edge Extensions](https://chrome.google.com/webstore/category/extensions?hl=en) website.

### CRX

For Chrome and Edge browser users who prefer not to use the applications from the extension stores, you can download the CRX file of this extension and manually install it in your Chrome or Edge browser.

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