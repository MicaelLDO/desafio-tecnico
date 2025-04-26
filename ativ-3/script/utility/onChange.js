// Função chamada quando o campo de email é alterado
function onChangeEmail() {
    toggleEmailErrors(); // Atualiza os erros relacionados ao email
}

// Função chamada quando o campo de senha é alterado
function onChangePassword() {
    togglePasswordErrors(); // Atualiza os erros relacionados à senha
}

// Função chamada quando o campo de email é alterado (pagina inicial)
function onChangeEmailInit() {
    toggleEmailErrors(); // Atualiza os erros relacionados ao email
    toggleButtonsDisable(); // Habilita ou desabilita os botões com base na validação
}

// Função chamada quando o campo de senha é alterado (pagina inicial)
function onChangePasswordInit() {
    togglePasswordErrors(); // Atualiza os erros relacionados à senha
    toggleButtonsDisable(); // Habilita ou desabilita os botões com base na validação
}

// Função para exibir ou ocultar erros relacionados ao email
function toggleEmailErrors() {
    const email = document.getElementById("email").value; // Obtém o valor do campo de email
    const requiredError = document.getElementById("email-required-error"); // Elemento de erro "email obrigatório"
    const invalidError = document.getElementById("email-invalid-error"); // Elemento de erro "email inválido"

    // Exibe ou oculta o erro "email obrigatório"
    requiredError.style.display = email ? "none" : "block";

    // Exibe ou oculta o erro "email inválido"
    invalidError.style.display = validateEmail(email) ? "none" : "block";
}

// Função para exibir ou ocultar erros relacionados à senha
function togglePasswordErrors() {
    const password = document.getElementById("password").value; // Obtém o valor do campo de senha
    const error = document.getElementById("password-required-error"); // Elemento de erro "senha obrigatória"

    // Exibe ou oculta o erro "senha obrigatória"
    error.style.display = password ? "none" : "block";
}

// Função para habilitar ou desabilitar os botões com base na validação dos campos
function toggleButtonsDisable() {
    const email = document.getElementById("email").value; // Obtém o valor do campo de email
    const password = document.getElementById("password").value; // Obtém o valor do campo de senha
    const loginButton = document.getElementById("login-button"); // Botão de login
    const recoverButton = document.getElementById("recover-password-button"); // Botão de recuperação de senha

    const emailValid = validateEmail(email); // Verifica se o email é válido
    const passwordValid = !!password; // Verifica se a senha foi preenchida

    // Habilita ou desabilita o botão de recuperação de senha com base na validação do email
    recoverButton.disabled = !emailValid;

    // Habilita ou desabilita o botão de login com base na validação do email e da senha
    loginButton.disabled = !(emailValid && passwordValid);
}

// Função para validar o formato do email
function validateEmail(email) {
    // Retorna true se o email corresponder ao padrão de um email válido
    return /\S+@\S+\.\S+/.test(email);
}