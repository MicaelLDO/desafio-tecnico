// Função assíncrona para realizar o cadastro de um novo usuário
async function register() {
  // Obtém os valores dos campos de nome, email e senha do formulário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Verifica se todos os campos estão preenchidos
  if (!name || !email || !password) {
      alert("Preencha todos os campos."); // Exibe um alerta se algum campo estiver vazio
      return; // Interrompe a execução da função
  }

  try {
      // Faz uma requisição POST para a API de cadastro
      const response = await fetch("https://login-api.mxqservices.com.br/users/register", {
          method: "POST", // Método HTTP POST
          headers: {
              "Content-Type": "application/json" // Define o tipo de conteúdo como JSON
          },
          body: JSON.stringify({ name, email, password }) // Envia os dados do usuário no corpo da requisição
      });

      // Verifica se a resposta da API não foi bem-sucedida
      if (!response.ok) {
          const errorData = await response.json(); // Obtém os detalhes do erro da resposta
          alert("Erro ao cadastrar: " + (errorData.message || response.statusText)); // Exibe o erro
          return; // Interrompe a execução da função
      }

      // Exibe uma mensagem de sucesso se o cadastro for realizado com sucesso
      alert("Cadastro realizado com sucesso!");
      window.location.href = "../../index.html"; // Redireciona para a página de login
  } catch (error) {
      // Captura e exibe erros relacionados à requisição
      alert("Erro na requisição: " + error.message);
  }
}