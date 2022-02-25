'use strict';

const humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];

// 1. Understand the problem
// - What is the humidity amplitude? This is the difference between min and max humidity.
// - How to calculate min and max values in array?
// - How sensosr error looks like in data array? What to do with this error?

// 2. Divide into sub-problems
// - How to ignore data errors?
// - How to calculate min value in array?
// - How to calculate max value in array?
// - Subtract min from max and return the result.

const calculateHumiditiesAmplitudeTwoArrays = function (h1, h2) {
   const humidities = h1.concat(h2);

   let max = humidities[0];
   let min = humidities[0];

   for (let i = 0; i < humidities.length; i++) {
      const currentHumidity = humidities[i];
      if (typeof currentHumidity !== 'number') continue;
      // debugger;
      if (currentHumidity > max) {
         max = currentHumidity;
      }
      if (currentHumidity < min) {
         min = currentHumidity;
      }
   }
   console.log(max, min);
   return max - min;
}

// const amplitude =  calculateHumiditiesAmplitude(humidities);
// console.log(amplitude);

// Problem 2
// The function should get two arrays of humidities as parameters

// 1. Understand the problem
// - Should we implement the same functionality for second array? - No, we should merge two arrays.

// 2. Divide into sub-problems
// How to Merge two arrays?

const calculateHumiditiesAmplitude = function (humidities) {
   let max = humidities[0];
   let min = humidities[0];

   for (let i = 0; i < humidities.length; i++) {
      const currentHumidity = humidities[i];
      if (typeof currentHumidity !== 'number') continue;

      if (currentHumidity > max) {
         max = currentHumidity;
      }
      if (currentHumidity < min) {
         min = currentHumidity;
      }
   }
   console.log(max, min);
   return max - min;
}

const amplitude = calculateHumiditiesAmplitudeTwoArrays([1, 20, 50], [23, 48, 78]);
console.log(amplitude);


const celsiusToKelvin = function() {
   const measurment = {
      type: 'temp',
      unit: 'celsius',
      value: Number(prompt('Temperature in Celsius')) // промпт всегда возвращает строку!!!
   }

   // console.log(measurment);
   console.table(measurment);

   // console.warn(measurment.value);
   // console.error(measurment.value);

   console.log(measurment.value);

   const kelvin = measurment.value + 273;
   return kelvin;
}

console.log(celsiusToKelvin());