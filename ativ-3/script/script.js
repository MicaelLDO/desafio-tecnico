
function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordErrors();
}


function goToRegister(){
    window.location.href= "pages/register/register.html";
}

function goToLogin() {
  window.location.href = "../../index.html";
}

function toggleEmailErrors() {
  const email = form.email().value;
  if (!email) {
    form.emailRequiredError().style.display = "block";
  } else {
    form.emailRequiredError().style.display = "none";
  }

  if (validateEmail(email)) {
    form.emailInvalidError().style.display = "none";
  } else {
    form.emailInvalidError().style.display = "block";
  }
}

function togglePasswordErrors() {
  const password = form.password().value;
  if (!password) {
    form.passwordRequiredError().style.display = "block";
  } else {
    form.passwordRequiredError().style.display = "none";
  }
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  const password = form.password().value;
  if (!password) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

async function recoverPassword() {
  const email = form.email().value;

  if (!email) {
    alert("Por favor, informe o seu e-mail para recuperar a senha.");
    return;
  }

  try {
    const response = await fetch("https://login-api.mxqservices.com.br/users/recover-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert("Erro ao recuperar senha: " + (errorData.message || response.statusText));
      return;
    }

    alert("Se o e-mail existir, você receberá instruções para recuperar sua senha.");
  } catch (error) {
    alert("Erro na requisição: " + error.message);
  }
}

const form = {
  email: () => document.getElementById("email"),
  emailInvalidError: () => document.getElementById("email-invalid-error"),
  emailRequiredError: () => document.getElementById("email-required-error"),
  loginButton: () => document.getElementById("login-button"),
  password: () => document.getElementById("password"),
  recoverPassword: () => document.getElementById("recover-password-button"),
  passwordRequiredError: () => document.getElementById("password-required-error")
};
