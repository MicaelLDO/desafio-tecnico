function onChangeEmail() {
    toggleEmailErrors();
  }
  
  function onChangePassword() {
    togglePasswordErrors();
  }
  
  function goToLogin() {
    window.location.href = "../../index.html";
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
    const passwordError = document.getElementById("password-required-error");
    passwordError.style.display = password ? "none" : "block";
  }
  
  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  async function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!name || !email || !password) {
      alert("Preencha todos os campos.");
      return;
    }
  
    try {
      const response = await fetch("https://login-api.mxqservices.com.br/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert("Erro ao cadastrar: " + (errorData.message || response.statusText));
        return;
      }
  
      alert("Cadastro realizado com sucesso!");
      window.location.href = "../../index.html";
    } catch (error) {
      alert("Erro na requisição: " + error.message);
    }
  }
  