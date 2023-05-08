const username = localStorage.getItem("username");
const password = localStorage.getItem("password");
const usertype = localStorage.getItem("usertype");

debugger;

// Fill username and password
var usernameField = document.getElementById("j_username_js");
debugger;
var passwordField = document.getElementById("password");
usernameField.value = username;
passwordField.value = password;

// Tick checkbox
var checkbox;
if (usertype === "@studenti.unipd.it") {
    checkbox = document.getElementById("radio2");
} else if (usertype === "@unipd.it") {
    checkbox = document.getElementById("radio1");
} else {
    checkbox = document.getElementById("radio2");
}

if (checkbox) {
    checkbox.checked = true;
}

// Click Login
var login_button = document.getElementById("login_button_js");
if (login_button != null) {
    login_button.click();

// Output to Console
console.log("Welcome to use UnipdAutoLogin.");
}