"use strict";

function foodProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = foodProcessor(4, 0);
console.log(appleJuice);

const appleOrangeJuice = foodProcessor(2, 2);
console.log(appleOrangeJuice);

//function declarations
function calcAge1(birhtYear) {
	const age = 2022 - birhtYear;
	return age;
}

const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birhtYear) {
	return 2022 - birhtYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);

//arrow function
const yearsUntilRetire = (birhtYear, firstName) => {
	const age = 2022 - birhtYear;
	const retirnment = 65 - age;
	return `${firstName} will retire in ${retirnment} years`;
};

console.log(yearsUntilRetire(1991, "Amol"));
