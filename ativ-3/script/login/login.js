// Função assíncrona para realizar o login do usuário
async function login() {
  // Obtém os valores dos campos de email e senha do formulário
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Verifica se os campos de email e senha estão preenchidos
  if (!email || !password) {
      alert("Preencha todos os campos."); // Exibe um alerta se algum campo estiver vazio
      return; // Interrompe a execução da função
  }

  try {
      // Faz uma requisição POST para a API de login
      const response = await fetch("https://login-api.mxqservices.com.br/users/login", {
          method: "POST", // Método HTTP POST
          headers: {
              "Content-Type": "application/json" // Define o tipo de conteúdo como JSON
          },
          body: JSON.stringify({ email, password }) // Envia o email e a senha no corpo da requisição
      });

      // Verifica se a resposta da API não foi bem-sucedida
      if (!response.ok) {
          const errorData = await response.json(); // Obtém os detalhes do erro da resposta
          alert("Erro ao fazer login: " + (errorData.message || response.statusText)); // Exibe o erro
          return; // Interrompe a execução da função
      }

      // Converte a resposta da API para JSON
      const data = await response.json();

      // Armazena o token JWT e os dados do usuário no localStorage
      localStorage.setItem("token", data.token); // Salva o token de autenticação
      localStorage.setItem("user", JSON.stringify(data.user)); // Salva os dados do usuário como string JSON

      alert("Login realizado com sucesso!"); // Exibe uma mensagem de sucesso
      window.location.href = "pages/home/home.html"; // Redireciona para a página inicial
  } catch (error) {
      // Captura e exibe erros relacionados à requisição
      alert("Erro na requisição: " + error.message);
  }
}