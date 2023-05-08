chrome.storage.local.get(["username", "password", "usertype"], function(data) {
    const savedUsername = data.username;
    const savedPassword = data.password;
    const savedUserType = data.usertype;

    // Fill username and password
    var usernameField = document.getElementById("j_username_js");
    var passwordField = document.getElementById("password");
    usernameField.value = savedUsername;
    passwordField.value = savedPassword;

    // Tick checkbox
    var checkbox;
    if (savedUserType === "@studenti.unipd.it") {
        checkbox = document.getElementById("radio2");
    } else if (savedUserType === "@unipd.it") {
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
 
});