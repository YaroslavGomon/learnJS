'use strict';

// Write a program that takes a list of variable names written in underscore_case and converts them to camelCase.
// Input will come from a textarea html element inserted into the DOM (see code below to insert elements) and the transformation will happen when the button is clicked.

// Test data (for inserting into the textarea including spaces):

// underscore_case
//   first_name
// next_Variable
//    Calculate_AGE
// arrived_flight

// This output should appear (5 separate console.log outputs):
// underscoreCase
// firstName
// nextVariable
// calculateAge
// arrivedFlight

// Hints:
// 1.	Remember which character defines a newline in a textbox
// 2.	The solution should only work for a two-word variable like first_second
// 3.	This is a tricky task, so start watching the solution in case you get stuck. Then pause and continue!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// My code
// document.querySelector('button').addEventListener('click', function () {
//    const input = document.querySelector('textarea').value.split('\n');
//   //  console.log(input);
//    for (const item of input) {
//       const word = item.toLowerCase().trim();
//       const first = word.slice(0, word.indexOf('_'));
//       let second = word.slice(word.indexOf('_') + 1);
//       second = second[0].toUpperCase() + second.slice(1);

//       console.log(first + second);
//    }
// });

// Teachers
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lines = text.split('\n');
  //  console.log(lines);
  for (const line of lines) {
    const [first, second] = line.toLowerCase().trim().split('_');
    // console.log(first, second);
    const output = `${first} ${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
  }
});
