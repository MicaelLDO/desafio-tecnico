document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token || !user) {
    alert("Você precisa estar logado.");
    window.location.href = "../../index.html";
    return;
  }

  document.getElementById("user-info").innerText = `${user.name} (${user.email})`;
});

async function getAllUsers() {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Você precisa estar logado.");
    return;
  }

  try {
    const response = await fetch("https://login-api.mxqservices.com.br/users/all-users", {
      method: "GET",
      headers: {
        "x-auth-token": token
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao obter os usuários.");
    }

    const users = await response.json();
    const userList = document.getElementById("user-list");
    userList.innerHTML = ""; // limpa a lista antes de adicionar novos usuários

    if (Array.isArray(users)) {
      users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
      });
    } else if (users.users && Array.isArray(users.users)) {
      users.users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
      });
    } else {
      alert("A resposta da API não contém uma lista de usuários válida.");
    }

  } catch (error) {
    console.error(error);
    alert("Erro ao listar os usuários: " + error.message);
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "../../index.html";
}


function goToChangePassword() {
  window.location.href = "../change-password/change-password.html";
}
