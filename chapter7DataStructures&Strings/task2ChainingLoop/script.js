'use strict';

// Let's get on with our soccer betting app ⚽💰! 
// Continue using the previously used game variable.

// 1. Loop through the game.scored array and print the name of each player to the console along with the goal number (example: “Goal 1 - Kroos”)

// 2. Use a loop to calculate the average odd and print it to the console 

// 3. Print 3 odds to the console, but formatted, exactly like this:
// Rate for REAL MADRID victory: 1.48 
// Rate for draw: 2.53
// Rate for BARCELONA victory: 4.25
// Get team names directly from the game object, don't hardcode them 

// 4. Bonus: create an object called goalScorers that contains the names of the players who scored as properties and the number of goals as a value. In this game it will look like this:
//       {
//         Kroos: 1,
//         Benzema: 1,
//         Mingueza: 1
// }

const game = {
   team1: 'REAL MADRID',
   team2: 'BARCELONA',
   players: [
      [
         'Courtois',
         'Vazquez',
         'Militao',
         'Nacho',
         'Mendy',
         'Casemiro',
         'Valverde',
         'Modrich',
         'Kroos',
         'Vinicius',
         'Benzema',
      ],
      [
         'Stegen',
         'Mingueza',
         'Araujo',
         'Lenglet',
         'Dest',
         'Busquets',
         'Jong',
         'Alba',
         'Messi',
         'Pedri',
         'Dembele',
      ],
   ],
   score: '2:1',
   scored: ['Kroos', 'Benzema', 'Mingueza', 'Benzema', 'Benzema', 'Benzema', 'Benzema'],
   date: 'Apr 10th, 2021',
   odds: {
      team1: 1.48,
      draw: 2.53,
      team2: 4.25,
   },
};

// // 1
// for (const [goalNumber, playerHit] of Object.entries(game.scored)) {
//    console.log(`Goal ${Number(goalNumber) + 1} - ${playerHit}`);
// }

// // 2
// const odds1 = Object.values(game.odds);
// console.log(odds1);

// let sum = 0;
// for (let val of odds1) {
//    sum += val;
// }
// console.log(`Average odd: ${(sum / odds1.length).toFixed(2)}`);

// //3
// const teamName = [game.team1, 0, game.team2];
// console.log(teamName);

// odds1.forEach((num1, i) => {
//    const num2 = teamName[i];
//    console.log(`Rate for ${num2 || ''}${num2 == 0 ? 'draw' : ' victory'}: ${num1}`);
// });

// // 4
// const igroki = Object.values(game.scored);
// console.log(igroki);

// const goalScorers = {
//    [igroki[0]]: 1,
//    [igroki[1]]: 1,
//    [igroki[2]]: 1,   
// }
// console.log(goalScorers);

// Teachers

// // 1
// for (const entry of game.scored.entries()) {
//    console.log(`Goal ${entry[0] + 1} - ${entry[1]}`);
// }

// // 2
// let oddSum = 0;
// let odds = Object.values(game.odds);
// for (const odd of odds) {
//    oddSum += odd;
// }
// const averageOdd = oddSum / odds.length;
// console.log(averageOdd);

// // 3
// for (const [name, odd] of Object.entries(game.odds)) {
//    // console.log(name, odd);
//    const mutableText = name === 'draw' ? 'draw' : `${game[name]} victory`;
//    console.log(`Rate for ${mutableText}: ${odd}`);
// }

// 4
const goalScorers = {};
for (const player of game.scored) {
   goalScorers[player] ? goalScorers[player]++ : (goalScorers[player] = 1);
}
console.log(goalScorers);