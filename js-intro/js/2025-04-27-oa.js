const car = {
    name: "Picun",
    mark: "f6",
    birth: 1941,
    isBroken: false,
    beapBeap: function () {
        console.log("piskaaAAAA")
    }
}

const CarsOwner = {
    name: "kATEHOK",
    surname: "sdvg",
    age: 100,
    cars: [
        car
    ],
}

console.log(car);
console.log(CarsOwner);

car.beapBeap()


const people = [];
people.push("Stepan")
people.push("Pidor")
people.unshift("LAex")


console.log(people);


let someone = people.pop()
console.log(someone)
console.log(people)

let someone2 = people.shift()
console.log(someone2)
console.log(people)

const evens = [];
let maxValue = 1000

for (let i = 0; i <= maxValue; i++) {
    if (i % 2) {
        evens.push(i + 1)
    }
}

console.log(evens)