const form = document.getElementById("main-form");
const email = document.getElementById("email");
const success = document.getElementById("success-container");
const dismissBtn = document.getElementById("dismiss-btn");
const formContainer = document.getElementById("form-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email required");
  } else if (!isEmail(emailValue)) {
    setError(email, "Valid email required");
  } else {
    setSuccess(email);
  }
}

function setError(input, message) {
  const inputControl = input.parentElement;
  const errorSmall = inputControl.querySelector("#error-msg small");
  inputControl.classList.add("error-state");
  errorSmall.textContent = message;
}

function setSuccess(input) {
  const inputControl = input.parentElement;
  const errorMsg = document.getElementById("error-msg");
  inputControl.classList.remove("error-state");
  errorMsg.textContent = "";
  success.classList.remove("hidden");
  formContainer.classList.add("hidden");
  const emailConfirm = document.getElementById("email").value;
  document.getElementById("email-confirm").textContent = `${emailConfirm}`;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}

dismissBtn.addEventListener("click", (e) => {
  success.classList.add("hidden");
  formContainer.classList.remove("hidden");
  location.reload();
});
