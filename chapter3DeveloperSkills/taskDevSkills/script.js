'use strict'

const humidity1 = [49, 51, 63];
const humidity2 = [31, 29, 43, 58, 52];

// const printHumiditiesForecast = function (humidity) {
//    for (let i = 0; i < humidity.length; i++) {
//       console.log(`...${humidity[i]}% humidity in ${i + 1} days `);
//    }

//    console.log('///////////////////////////////');
// }

// const printHumiditiesForecast = function (humidity) {
//    const forecast = [];
//    for (let i = 0; i < humidity.length; i++) {
//       // forecast[i] = ('... ' + humidity[i] + '% ' + 'humidity in ' + (i + 1) + ' days');
//       forecast.push('... ' + humidity[i] + '% ' + 'humidity in ' + (i + 1) + (i == 0 ? ' day' : ' days') + (i == humidity.length -1 ? ' ...' : ''));
//    }

//    console.log(forecast.join(" "));
// }

const printHumiditiesForecast = function (humidity) {
   let str = "... "

   for (let i = 0; i < humidity.length; i++) {
      str += `${humidity[i]}% humidity in ${i + 1} ${i == 0 ? 'day' : 'days'} ... `;
   }

   console.log(str);
}


printHumiditiesForecast(humidity1);
printHumiditiesForecast(humidity2);