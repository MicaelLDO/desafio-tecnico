function verificar() {
    const textoOriginal = document.getElementById("entrada").value;
  
    // Remove espaços, pontuação e acentos (normaliza o texto)
    const textoLimpo = textoOriginal
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // remove acentos
      .replace(/[^a-z0-9]/g, ""); // remove tudo que não for letra ou número
  
    // Inverte o texto
    const textoInvertido = textoLimpo.split('').reverse().join('');
  
    const resultado = document.getElementById("resultado");
    if (textoLimpo && textoLimpo === textoInvertido) {
      resultado.textContent = "✅ É um palíndromo!";
      resultado.style.color = "green";
    } else {
      resultado.textContent = "❌ Não é um palíndromo.";
      resultado.style.color = "red";
    }
  }