//zadacha 1

let base = 0, otvet;

base = Number(prompt("Введи число чтобы найти его квадрат и куб", 0))

function square(base) {
    return base * base
}

function cube(base) {
    return base * base * base
}

otvet = square(base)
alert(`квадрат числа равен: ${otvet}`)

otvet = cube(base)
alert(`куб числа равен: ${otvet}`)


//zadacha 2

let length, width, height;

length = Number(prompt("Введи длину", 0));
width = Number(prompt("Введи ширину", 0))
height = Number(prompt("Введи высоту", 0))

function rectangular_parallelepiped_volume(length, width, height) {
    return length * width * height
}

otvet = rectangular_parallelepiped_volume(length, width, height)

alert(`otvet: ${otvet}`)

//zadacha 3

let exp;

base = Number(prompt("Введи число", 0));
exp =  Number(prompt("Теперь его степень", 0));

function pow(base, exp) {
    let old_base = base
    for (exp; exp > 1; exp--) {
        base = base * old_base
    }
    return base
}


otvet = pow(base, exp)

alert(`otvet: ${otvet}`)