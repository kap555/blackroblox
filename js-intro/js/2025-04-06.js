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
        if (b == 0) {
            alert("Ты же помнишь, да?\nЧто на ноль делить нельзя :)\n\n:skull:")
            result = NaN
        } else {
            result = a / b
        }
        break;
    default:
        alert("НЕИЗВЕСТНАЯ ОПЕРАЦИЯ НА ЯИЧКИ!!!")
}

if (isNaN(result)) {
    alert("Некорректный ввод! Немощь!")
} else {
    alert(`Ответ: ${result}`)
}