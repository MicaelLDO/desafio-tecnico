function onChangeEmail() {
    toggleEmailErrors();
}

function onChangePassword() {
    togglePasswordErrors();
}

function onChangeEmailInit(){
    toggleEmailErrors();
    toggleButtonsDisable();
}

function onChangePasswordInit() {
    togglePasswordErrors();
    toggleButtonsDisable();
}

function toggleEmailErrors() {
    const email = document.getElementById("email").value;
    const requiredError = document.getElementById("email-required-error");
    const invalidError = document.getElementById("email-invalid-error");
  
    requiredError.style.display = email ? "none" : "block";
    invalidError.style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = document.getElementById("password").value;
    const error = document.getElementById("password-required-error");
    error.style.display = password ? "none" : "block";
}


function toggleButtonsDisable() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loginButton = document.getElementById("login-button");
    const recoverButton = document.getElementById("recover-password-button");
  
    const emailValid = validateEmail(email);
    const passwordValid = !!password;
  
    recoverButton.disabled = !emailValid;
    loginButton.disabled = !(emailValid && passwordValid);
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}