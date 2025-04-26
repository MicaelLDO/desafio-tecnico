
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
  