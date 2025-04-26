// Mostrar o nome do usuário
const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem("token");

if (!user || !token) {
  alert("Você precisa estar logado para alterar a senha.");
  window.location.href = "../../index.html"; // Redireciona para login
}

// Exibir o nome do usuário na página
const userNameDisplay = document.getElementById("userNameDisplay");
userNameDisplay.textContent = `Olá, ${user.name}!`;

async function changePassword(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const oldPassword = document.getElementById("oldPassword").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();

  if (!oldPassword || !newPassword) {
    alert("Preencha todos os campos.");
    return;
  }

  if (!token) {
    alert("Token de autenticação não encontrado. Faça login novamente.");
    window.location.href = "../../index.html";
    return;
  }

  try {
    const response = await fetch("https://login-api.mxqservices.com.br/users/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token
      },
      body: JSON.stringify({
        oldPassword: oldPassword,
        newPassword: newPassword
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro da API:", errorData);
      throw new Error(errorData.message || "Erro ao alterar a senha.");
    }

    const data = await response.json();
    alert(data.message || "Senha alterada com sucesso!");

    // Limpa o formulário depois de sucesso
    document.getElementById("changePasswordForm").reset();
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro: " + error.message);
  }
}

// Conecta o submit do form à função changePassword
document.getElementById('changePasswordForm').addEventListener('submit', changePassword);