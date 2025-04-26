// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener("DOMContentLoaded", () => {
  // Obtém o token de autenticação e os dados do usuário do localStorage
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // Verifica se o token ou os dados do usuário estão ausentes
  if (!token || !user) {
    alert("Você precisa estar logado."); // Exibe um alerta se o usuário não estiver logado
    window.location.href = "../../index.html"; // Redireciona para a página de login
    return; // Interrompe a execução do código
  }

  // Exibe as informações do usuário na página
  document.getElementById("user-info").innerText = `${user.name} (${user.email})`;
});

// Função assíncrona para obter a lista de todos os usuários
async function getAllUsers() {
  // Obtém o token de autenticação do localStorage
  const token = localStorage.getItem("token");

  // Verifica se o token está ausente
  if (!token) {
    alert("Você precisa estar logado."); // Exibe um alerta se o token não estiver presente
    return; // Interrompe a execução da função
  }

  try {
    // Faz uma requisição GET para a API para obter a lista de usuários
    const response = await fetch("https://login-api.mxqservices.com.br/users/all-users", {
      method: "GET", // Método HTTP GET
      headers: {
        "x-auth-token": token // Envia o token de autenticação no cabeçalho
      }
    });

    // Verifica se a resposta da API não foi bem-sucedida
    if (!response.ok) {
      const errorData = await response.json(); // Obtém os detalhes do erro da resposta
      throw new Error(errorData.message || "Erro ao obter os usuários."); // Lança um erro com a mensagem apropriada
    }

    // Converte a resposta da API para JSON
    const users = await response.json();
    const userList = document.getElementById("user-list"); // Obtém o elemento da lista de usuários
    userList.innerHTML = ""; // Limpa a lista antes de adicionar novos usuários

    // Verifica se a resposta contém uma lista de usuários válida
    if (Array.isArray(users)) {
      // Adiciona cada usuário à lista
      users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`; // Exibe o nome e o email do usuário
        userList.appendChild(li); // Adiciona o item à lista
      });
    } else if (users.users && Array.isArray(users.users)) {
      // Caso a API retorne os usuários dentro de um objeto "users"
      users.users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`; // Exibe o nome e o email do usuário
        userList.appendChild(li); // Adiciona o item à lista
      });
    } else {
      // Caso a resposta da API não contenha uma lista válida
      alert("A resposta da API não contém uma lista de usuários válida.");
    }

  } catch (error) {
    // Captura e exibe erros relacionados à requisição
    console.error(error); // Exibe o erro no console
    alert("Erro ao listar os usuários: " + error.message); // Exibe um alerta com a mensagem de erro
  }
}

// Função para realizar o logout do usuário
function logout() {
  // Remove o token e os dados do usuário do localStorage
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  // Redireciona para a página de login
  window.location.href = "../../index.html";
}