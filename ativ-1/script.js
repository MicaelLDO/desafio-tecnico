// Função que realiza as operações matemáticas básicas entre dois números
function operacoesmat(a, b) {
  return {
    x: a, // Primeiro número
    y: b, // Segundo número
    soma: a + b, // Soma dos dois números
    subtracao: a - b, // Subtração do segundo número do primeiro
    multi: a * b, // Multiplicação dos dois números
    divisao: b !== 0 ? (a / b).toFixed(2) : "Divisão por zero" // Divisão do primeiro pelo segundo (com validação para divisão por zero)
  };
}

// Função que é chamada ao clicar no botão "Calcular"
function calcular() {
  // Obtém os valores dos campos de entrada e os converte para números
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Verifica se os valores inseridos são números válidos
  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, insira dois números válidos."); // Exibe um alerta se os valores não forem números
    return; // Interrompe a execução da função
  }

  // Chama a função de operações matemáticas e armazena o resultado
  const resultado = operacoesmat(num1, num2);
  
  // Atualiza os elementos HTML com os resultados das operações
  document.getElementById("valor-x").innerText = resultado.x; // Exibe o primeiro número
  document.getElementById("valor-y").innerText = resultado.y; // Exibe o segundo número
  document.getElementById("soma").innerText = resultado.soma; // Exibe o resultado da soma
  document.getElementById("subtracao").innerText = resultado.subtracao; // Exibe o resultado da subtração
  document.getElementById("multiplicacao").innerText = resultado.multi; // Exibe o resultado da multiplicação
  document.getElementById("divisao").innerText = resultado.divisao; // Exibe o resultado da divisão

  // Torna visível a div onde os resultados são exibidos
  document.getElementById("resultado").style.display = "block";
}