
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
  

  