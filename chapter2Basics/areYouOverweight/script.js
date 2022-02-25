const weight = prompt('Enter your weight in kilograms');
const height = prompt('Enter your height in meters');

const bmi = (weight / Math.pow(height, 2)).toFixed(2);

console.log(`Your BMI = ${bmi}`);

if (bmi >= 25) {
  alert(`You are overweight! Your BMI is ${bmi}.`);
}
else {
  alert(`You are not overweight! Your BMI is ${bmi}.`);
}