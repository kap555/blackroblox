let a, b, sigma, result = NaN;

a = Number(prompt("chislo A", "0"));
b = Number(prompt("chislo B", "0"));

sigma = prompt("Введи знак действия (+, -, *, /)", "+");

switch (sigma) {
    case "+":
        result = a + b
        break;
    case "-":
        result = a - b
        break;
    case "*":
        result = a * b
        break;
    case "/":
        result = a / b
        break;
    default:
        alert("НЕИЗВЕСТНАЯ ОПЕРАЦИЯ НА ЯИЧКИ!!!")
}

if (isNaN(result)) {
    alert("Некорректный ввод! Немощь!")
} else {
    alert(`Ответ: ${result}`)
}