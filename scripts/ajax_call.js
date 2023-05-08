const passwordInput = document.querySelector("#password");
const togglePassword = document.querySelector("#toggle-password");
const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const userTypeInputs = document.querySelectorAll("input[name='usertype']");
const storage = chrome.storage.local;

let savedUsername = "";
let savedPassword = "";
let savedUserType = "";

// Restore saved data from storage
storage.get(["username", "password", "usertype"], function(data) {
  savedUsername = data.username || "";
  savedPassword = data.password || "";
  savedUserType = data.usertype || "";

  usernameInput.value = savedUsername;
  passwordInput.value = savedPassword;
  userTypeInputs.forEach((input) => {
    if (input.value === savedUserType) {
      input.checked = true;
    }
  });
});

// Save form data to storage
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const userType = document.querySelector("input[name='usertype']:checked").value;

  storage.set({ "username": username });
  storage.set({ "password": password });
  storage.set({ "usertype": userType });

  const isSaved = window.confirm("Salvato con successo!");
  if (isSaved) {
    window.close();
  }
  
});

// Toggle password visibility
togglePassword.addEventListener("mouseover", () => {
  togglePassword.style.cursor = "pointer";
});

togglePassword.addEventListener("mouseout", () => {
  togglePassword.style.cursor = "default";
});

togglePassword.addEventListener("mousedown", () => {
  passwordInput.type = "text";
});

togglePassword.addEventListener("mouseup", () => {
  passwordInput.type = "password";
});

togglePassword.addEventListener("touchstart", () => {
  passwordInput.type = "text";
});

togglePassword.addEventListener("touchend", () => {
  passwordInput.type = "password";
});


// save button pointer
const saveButton = document.querySelector('button[type="submit"]');

saveButton.addEventListener('mouseover', () => {
  saveButton.style.cursor = 'pointer';
});

saveButton.addEventListener('mouseout', () => {
  saveButton.style.cursor = 'default';
});


