document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const signupButton = document.getElementById("signup-button");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

    loginButton.addEventListener("click", function () {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });

    signupButton.addEventListener("click", function () {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });
});
const button = document.querySelector('.dropdown-button');
const content = document.querySelector('.dropdown-content');

button.addEventListener('click', () => {
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

const options = document.querySelectorAll('.dropdown-option');
options.forEach((option) => {
  option.addEventListener('click', (e) => {
    button.textContent = e.currentTarget.textContent;
    content.style.display = 'none';
  });
});
