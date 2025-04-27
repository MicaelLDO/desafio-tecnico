// Função para verificar se o texto digitado é um palíndromo
function verificar() {
  // Obtém o valor do campo de entrada
  const textoOriginal = document.getElementById("entrada").value;

  // Remove espaços, pontuação e acentos (normaliza o texto)
  const textoLimpo = textoOriginal
    .toLowerCase() // Converte o texto para letras minúsculas
    .normalize("NFD") // Normaliza o texto para separar os acentos das letras
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .replace(/[^a-z0-9]/g, ""); // Remove tudo que não for letra ou número

  // Inverte o texto
  const textoInvertido = textoLimpo.split('').reverse().join('');

  // Obtém o elemento onde o resultado será exibido
  const resultado = document.getElementById("resultado");

  // Verifica se o texto limpo é igual ao texto invertido
  if (textoLimpo && textoLimpo === textoInvertido) {
      // Exibe mensagem de sucesso se for um palíndromo
      resultado.textContent = "✅ É um palíndromo!";
      resultado.style.color = "green"; // Define a cor do texto como verde
  } else {
      // Exibe mensagem de erro se não for um palíndromo
      resultado.textContent = "❌ Não é um palíndromo.";
      resultado.style.color = "red"; // Define a cor do texto como vermelho
  }
}