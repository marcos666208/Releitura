let result = document.getElementById("result");

// Função para adicionar um valor ou operador ao campo de resultado
function appendToResult(value) {
    result.value += value;
}

// Função para calcular a raiz quadrada
function calculateSqrt() {
    let inputValue = parseFloat(result.value);
    if (!isNaN(inputValue) && inputValue >= 0) {
        result.value = Math.sqrt(inputValue);
    } else {
        result.value = "Erro";
    }
}

// Função para calcular o fatorial
function calculateFactorial() {
    let inputValue = parseInt(result.value);
    if (!isNaN(inputValue) && inputValue >= 0) {
        let factorial = 1;
        for (let i = 2; i <= inputValue; i++) {
            factorial *= i;
        }
        result.value = factorial;
    } else {
        result.value = "Erro";
    }
}

// Função para calcular o resultado quando o botão "=" é pressionado
function calculateResult() {
    try {
        // Avalia a expressão no campo de resultado e exibe o resultado
        result.value = eval(result.value);
    } catch (error) {
        // Se houver um erro na expressão, exibe "Erro" no campo de resultado
        result.value = "Erro";
    }
}

// Função para limpar o campo de resultado
function clearResult() {
    result.value = "";
}