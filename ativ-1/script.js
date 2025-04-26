
function operacoesmat(a, b) {
  return {
    x: a,
    y: b,
    soma: a + b,
    subtracao: a - b,
    multi: a * b,
    divisao: b !== 0 ? (a / b).toFixed(2) : "Divisão por zero"
  };
}

function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, insira dois números válidos.");
    return;
  }

  const resultado = operacoesmat(num1, num2);
  
  document.getElementById("valor-x").innerText = resultado.x;
  document.getElementById("valor-y").innerText = resultado.y;
  document.getElementById("soma").innerText = resultado.soma;
  document.getElementById("subtracao").innerText = resultado.subtracao;
  document.getElementById("multiplicacao").innerText = resultado.multi;
  document.getElementById("divisao").innerText = resultado.divisao;

  document.getElementById("resultado").style.display = "block";
}

