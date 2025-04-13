function calculate(sigma, a, b) {
    let result = NaN;
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
    return result
}

function calculator() {
    let a, b, sigma, result = NaN;
    if (!confirm("Запустить КАЛКЬУККУЛУК КАЛЬКУЛЯТОР??")) return false;
    a = Number(prompt("chislo A", "0"));
    b = Number(prompt("chislo B", "0"));
    
    sigma = prompt("Введи знак действия (+, -, *, /)", "+");
    
    result = calculate(sigma, a, b)

    if (isNaN(result)) {
        alert("Некорректный ввод! Немощь!")
    } else {
        alert(`Ответ: ${result}`)
    }
    
    return true;
}
let needRun = true

while (needRun) needRun = calculator()