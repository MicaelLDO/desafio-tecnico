function onChangeEmail() {
    toggleEmailErrors();
    toggleButtonsDisable();
  }
  
  function onChangePassword() {
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
  
  async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!email || !password) {
      alert("Preencha todos os campos.");
      return;
    }
  
    try {
      const response = await fetch("https://login-api.mxqservices.com.br/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert("Erro ao fazer login: " + (errorData.message || response.statusText));
        return;
      }
  
      const data = await response.json();
  
      // Armazena o token e os dados do usuário no localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); // Supondo que venha o objeto 'user'
  
      alert("Login realizado com sucesso!");
      window.location.href = "pages/home/home.html";
    } catch (error) {
      alert("Erro na requisição: " + error.message);
    }
  }
  
  function register() {
    window.location.href = "pages/register/register.html";
  }
  