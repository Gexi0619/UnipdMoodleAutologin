let showPasswordTimeout;
const passwordInput = document.querySelector("#password");
const togglePassword = document.querySelector("#toggle-password");

const showPassword = () => {
  passwordInput.type = "text";
  clearTimeout(showPasswordTimeout);
};

const hidePassword = () => {
  passwordInput.type = "password";
  showPasswordTimeout = setTimeout(() => {
    passwordInput.type = "password";
  }, 1000);
};

togglePassword.addEventListener("mousedown", showPassword);
togglePassword.addEventListener("mouseup", hidePassword);
togglePassword.addEventListener("touchstart", showPassword);
togglePassword.addEventListener("touchend", hidePassword);

const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");
const savedUserType = localStorage.getItem("usertype");

if (savedUsername) {
  document.querySelector("#username").value = savedUsername;
}

if (savedPassword) {
  passwordInput.value = savedPassword;
  passwordInput.type = "password";
}

if (savedUserType) {
  const userTypeInput = document.querySelector(`input[value='${savedUserType}']`);
  userTypeInput.checked = true;
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const userTypeInput = document.querySelector("input[name='usertype']:checked");
  localStorage.setItem("username", usernameInput.value);
  localStorage.setItem("password", passwordInput.value);
  localStorage.setItem("usertype", userTypeInput.value);
  alert(
    `Username, password, and user type saved:${usernameInput.value}, ${passwordInput.value}`
  );
});

