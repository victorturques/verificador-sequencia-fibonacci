// Função para verificar se o número pertence à sequência de Fibonacci
function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;

    if (numero === 0 || numero === 1) {
        return true;
    }

    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b === numero;
}

// Função para verificar e exibir o resultado
function verificarFibonacci() {
    let numero = parseInt(document.getElementById('numero').value);
    let resultado = document.getElementById('resultado');

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, insira um número válido.";
        resultado.style.color = "red";
        return;
    }

    if (pertenceFibonacci(numero)) {
        resultado.textContent = `${numero} pertence à sequência de Fibonacci.`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `${numero} não pertence à sequência de Fibonacci.`;
        resultado.style.color = "red";
    }
}
