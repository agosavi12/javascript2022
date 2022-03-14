//Coding Challenge #1
const massMarks = 95;
const heightMarks = 1.88;

const massJohns = 85;
const heightJohns = 1.76;

//bmi
const marksBmi = massMarks / heightMarks ** 2;
const johnsBmi = massJohns / (heightMarks * heightMarks);

const markHigherBMI = marksBmi > johnsBmi;

console.log(markHigherBMI);

//Coding Challenge #2

if (markHigherBMI) {
	console.log(`"Mark's BMI ${marksBmi} is higher than John's ${johnsBmi}!"`);
} else {
	console.log(`John's BMI${johnsBmi} is higher than Mark's ${marksBmi}!`);
}

//Coding Challenge #3
const scoreDolphins = (97 + 112 + 81) / 3;
const scroreKoalas = (109 + 95 + 86) / 3;

console.log(scoreDolphins, scroreKoalas);

if (scoreDolphins > scroreKoalas && scoreDolphins >= 100) {
	console.log("Dolphins win");
} else if (scroreKoalas > scoreDolphins && scroreKoalas >= 100) {
	console.log("Koalas Wins");
} else if (
	scoreDolphins === scroreKoalas &&
	scoreDolphins >= 100 &&
	scroreKoalas >= 100
) {
	console.log("Draw!");
} else {
	console.log("no wins");
}
