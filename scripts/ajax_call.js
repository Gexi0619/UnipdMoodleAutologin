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

// 将变量声明提前，以便在后面的代码中使用
let savedUsername, savedPassword, savedUserType;

// 使用chrome.storage.local.get异步函数，将获取数据的代码移动到回调函数中
chrome.storage.local.get("username", function(data) {
  savedUsername = data.username; 
  if (savedUsername) {
    document.querySelector("#username").value = savedUsername;
  }
});

chrome.storage.local.get("password", function(data) {
  savedPassword = data.password; 
  if (savedPassword) {
    passwordInput.value = savedPassword;
    passwordInput.type = "password";
  }
});

chrome.storage.local.get("usertype", function(data) {
  savedUserType = data.usertype; 
  if (savedUserType) {
    const userTypeInput = document.querySelector(`input[value='${savedUserType}']`);
    userTypeInput.checked = true;
  }
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const userTypeInput = document.querySelector("input[name='usertype']:checked");

  // 修复变量名错误，将username改为usernameInput，password改为passwordInput，usertype改为userTypeInput
  const username = usernameInput.value;
  const password = passwordInput.value;
  const userType = userTypeInput.value;

  chrome.storage.local.set({ "username": username });
  chrome.storage.local.set({ "password": password });
  chrome.storage.local.set({ "usertype": userType });

  alert(
    `Saved successfully!`
  );
});

togglePassword.addEventListener("mousedown", showPassword);
togglePassword.addEventListener("mouseup", hidePassword);
togglePassword.addEventListener("touchstart", showPassword);
togglePassword.addEventListener("touchend", hidePassword);
