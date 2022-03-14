'use strict'

function foodProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`
  return juice
}

const appleJuice = foodProcessor(4, 0)
console.log(appleJuice)

const appleOrangeJuice = foodProcessor(2, 2)
console.log(appleOrangeJuice)

//function declarations
function calcAge1(birhtYear) {
  const age = 2022 - birhtYear
  return age
}

const age1 = calcAge1(1991)

//function expression
const calcAge2 = function (birhtYear) {
  return 2022 - birhtYear
}

const age2 = calcAge2(1991)

console.log(age1, age2)

//arrow function
const yearsUntilRetire = (birhtYear, firstName) => {
  const age = 2022 - birhtYear
  const retirnment = 65 - age
  return `${firstName} will retire in ${retirnment} years`
}

console.log(yearsUntilRetire(1991, 'Amol'))

//functions calling other functions
const cutFruitPices = function (fruit) {
  return fruit * 4
}

const fruitProcessor2 = function (apples, oranges) {
  const applePices = cutFruitPices(apples)
  const orangePices = cutFruitPices(oranges)

  return `Juice with ${applePices} pices of apple and ${orangePices} pices of oranges.`
}

console.log(fruitProcessor2(2, 3))

//Coding Challenge #1
const calcAverage = (a, b, c) => {
  return (a + b + c) / 3
}

const scoreDolphins = calcAverage(84, 54, 41)
const scoreKoalas = calcAverage(23, 34, 27)

const checkWinner = (averageDolphins, averageKoalas) => {
  if (averageDolphins >= 2 * averageKoalas) {
    console.log(`Dolphin wins ${averageDolphins} vs ${averageKoalas}`)
  } else if (averageKoalas >= 2 * averageDolphins) {
    console.log(`Koalas wins ${averageKoalas} vs ${averageDolphins}`)
  } else {
    console.log('no winner')
  }
}

checkWinner(scoreDolphins, scoreKoalas)
