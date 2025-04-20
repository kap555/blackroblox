// let exp;

// base = Number(prompt("Введи число", 0));
// exp =  Number(prompt("Теперь его степень", 0));

// function pow(base, exp) {
//     if (exp == 0 && base == 0 || exp < 0) return undefined
//     if (exp == 0) {
//         return 1
//     }
//     if (base == 0 || base == 1) return base;
//     return new_base = base * pow(base, exp - 1)
// }


// otvet = pow(base, exp)

// alert(`otvet: ${otvet}`)

// function factor(n) {
//     if (n < 0) return undefined;
//     if (n == 0) return 1;
//     return n * factor(n - 1)
// }


let n, otveto;

n = Number(prompt("Введи число и будет найден его факториал"), 0)

function factor(n) {
    if (n < 0) return undefined;
    if (n == 0) return 1;
    let cur_n = n
    for (n; n > 1; n--) {
        cur_n = cur_n * (n - 1)
    }
    return cur_n
}

otveto = factor(n)

alert(`Факториал числа равен ${otveto}`)
