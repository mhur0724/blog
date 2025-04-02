const loginForm = document.getElementById("login-form");
const passwordEl = document.getElementById("password");
const showPasswordBtnImg = document.querySelector(".password-show-toggle img");
const formBtn = document.getElementById("login-button");
const userLogin = document.getElementById("username");
const userPassword = document.getElementById("password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(userLogin.value);
  console.log(userPassword.value);
});

document
  .querySelector(".password-show-toggle")
  .addEventListener("click", () => {
    passwordEl.type = passwordEl.type === "password" ? "text" : "password";
    showPasswordBtnImg.src = showPasswordBtnImg.src.includes("open")
      ? "eye_closed.svg"
      : "eye_open.svg";
    console.log(showPasswordBtnImg.src);
  });
