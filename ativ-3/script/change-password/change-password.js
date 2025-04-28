// Este código é para requisições de alteração de senha em uma aplicação web.
// O código não está funcionando no momento, precisa ser corrigido para funcionar corretamente.

// Mostrar o nome do usuário
const user = JSON.parse(localStorage.getItem("user")); // Recupera o objeto "user" do localStorage e o converte de JSON para um objeto JavaScript.
const token = localStorage.getItem("token"); // Recupera o token de autenticação do localStorage.

// Verifica se o usuário ou o token não estão disponíveis
if (!user || !token) {
  alert("Você precisa estar logado para alterar a senha."); // Exibe um alerta informando que o login é necessário.
  window.location.href = "../../index.html"; // Redireciona para a página de login.
}

// Exibir o nome do usuário na página
const userNameDisplay = document.getElementById("userNameDisplay"); // Obtém o elemento onde o nome do usuário será exibido.
userNameDisplay.textContent = `Olá, ${user.name}!`; // Define o texto do elemento para exibir o nome do usuário.

async function changePassword(event) {
  event.preventDefault(); // Impede o envio padrão do formulário.

  // Obtém os valores dos campos de senha antiga e nova.
  const oldPassword = document.getElementById("oldPassword").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();

  // Verifica se os campos estão preenchidos.
  if (!oldPassword || !newPassword) {
    alert("Preencha todos os campos."); // Exibe um alerta se algum campo estiver vazio.
    return;
  }

  // Verifica novamente se o token está disponível.
  if (!token) {
    alert("Token de autenticação não encontrado. Faça login novamente."); // Exibe um alerta se o token não for encontrado.
    window.location.href = "../../index.html"; // Redireciona para a página de login.
    return;
  }

  try {
    // Faz uma requisição para a API para alterar a senha.
    const response = await fetch("https://login-api.mxqservices.com.br/users/change-password", {
      method: "POST", // Método HTTP POST.
      headers: {
        "Content-Type": "application/json", // Define o tipo de conteúdo como JSON.
        "x-auth-token": token // Adiciona o token de autenticação no cabeçalho.
      },
      body: JSON.stringify({
        oldPassword: oldPassword, // Envia a senha antiga.
        newPassword: newPassword // Envia a nova senha.
      })
    });

    // Verifica se a resposta da API não foi bem-sucedida.
    if (!response.ok) {
      const errorData = await response.json(); // Tenta obter os detalhes do erro da resposta.
      console.error("Erro da API:", errorData); // Loga o erro no console.
      throw new Error(errorData.message || "Erro ao alterar a senha."); // Lança um erro com a mensagem da API ou uma mensagem padrão.
    }

    const data = await response.json(); // Obtém os dados da resposta da API.
    alert(data.message || "Senha alterada com sucesso!"); // Exibe uma mensagem de sucesso.

    // Limpa o formulário depois de sucesso.
    document.getElementById("changePasswordForm").reset();
   
  } catch (error) {
    console.error("Erro na requisição:", error); // Loga o erro no console.
    alert("Erro: " + error.message); // Exibe um alerta com a mensagem de erro.
  }
}

// Conecta o submit do form à função changePassword
document.getElementById('changePasswordForm').addEventListener('submit', changePassword);
