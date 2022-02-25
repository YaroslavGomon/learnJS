'use strict';

// We are creating a soccer betting app ⚽💰!
// Let's say we are getting data about a specific game from a web service (the game variable below). In this task, we will work with this data.

// 1. Create separate arrays with players for each team (variables players1 and players2).

// 2. The first player in each of these arrays is the goalkeeper and the rest are the field players. For REAL MADRID (team1) create one variable (goalkeeper) with the name of the goalkeeper and one array (fieldPlayers) with all the remaining 10 field players.

// 3. Create an array allPlayers containing all players from both teams (22 players).

// 4. REAL MADRID (team1) used 5 substitute players during the game. Create a new array (players1Total) containing all original players of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'.

// 5. Based on the game.odds object, create one variable for each odd (called team1, draw and team2).

// 6. A write function printGoals that takes an arbitrary number of player names (NOT an array) and prints each one to the console along with the total number of goals scored (the number of player names passed to the function).

// 7. The team with the lower odds will win more likely. Print to the console which team is more likely to win, WITHOUT using an if / else or ternary operator.

// Test data for 6.: First use 'Mingueza', 'Messi', 'Modrich' and 'Nacho' players. Then call the function again with the players from game.scored.



/////////////////////////////////////////////////////
// My code

// const game = {
//    team1: 'REAL MADRID',
//    team2: 'BARCELONA',
//    players: [
//       [
//          'Courtois',
//          'Vazquez',
//          'Militao',
//          'Nacho',
//          'Mendy',
//          'Casemiro',
//          'Valverde',
//          'Modrich',
//          'Kroos',
//          'Vinicius',
//          'Benzema',
//       ],
//       [
//          'Stegen',
//          'Mingueza',
//          'Araujo',
//          'Lenglet',
//          'Dest',
//          'Busquets',
//          'Jong',
//          'Alba',
//          'Messi',
//          'Pedri',
//          'Dembele',
//       ],
//    ],
//    score: '2:1',
//    scored: ['Kroos', 'Benzema', 'Mingueza'],
//    date: 'Apr 10th, 2021',
//    odds: {
//       team1: 1.48,
//       draw: 2.53,
//       team2: 4.25,
//    },
// };

// const players1 = game.players[0];
// const players2 = game.players[1];
// let players1Copy = [...players1];
// // console.log(players1);
// // console.log(players2);

// const goalkeeper = players1[0];
// // console.log(goalkeeper);

// const fieldPlayers = players1.slice(1, players1.length);
// // console.log(fieldPlayers);

// const allPlayers = players1.concat(players2);
// // console.log(allPlayers);

// const players1Zap = ['Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola'];
// const players1Total = [...players1, ...players1Zap];
// // console.log(players1Total);

// const team1 = game.odds.team1;
// const draw = game.odds.draw;
// const team2 = game.odds.team2;
// console.log(team1, draw, team2);

// const printGoals = function (...playerName) {
//    const goals = playerName.length;
//    console.log(...playerName, `////////// Goals: ${goals}`);
// }

// // printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho');
// printGoals(...game.scored);

// const winner = function (...team) {   
//    console.log(Math.max(...team));
//    }

// winner(game.odds.team1, game.odds.team2);


////////////////////////////////////////////////////////////////////
// Teachers code

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
   scored: ['Kroos', 'Benzema', 'Mingueza'],
   date: 'Apr 10th, 2021',
   odds: {
      team1: 1.48,
      draw: 2.53,
      team2: 4.25,
   },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [goalkeeper, ...fieldPlayers] = players1;
console.log(goalkeeper, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Total = [...players1, 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola'];
console.log(players1Total);

const {odds: {team1, draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function (...gamePlayers) {
   console.log(...gamePlayers);
   console.log(`${gamePlayers.length} goals scored.`);

}

printGoals('Mingueza', 'Messi', 'Modrich', 'Nacho');
printGoals(...game.scored);

team1 < team2 && console.log(`${game.team1} is more likely to win.`);
team1 > team2 && console.log(`${game.team2} is more likely to win.`);
