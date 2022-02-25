// console.log('Push ups repetition 1');
// console.log('Push ups repetition 2');
// console.log('Push ups repetition 3');
// console.log('Push ups repetition 4');
// console.log('Push ups repetition 5');
// console.log('Push ups repetition 6');
// console.log('Push ups repetition 7');
// console.log('Push ups repetition 8');
// console.log('Push ups repetition 9');
// console.log('Push ups repetition 10');

// for (let rep = 1; rep <= 10; rep += 2) {
//    console.log(`Push ups repetition ${rep}`);
//    console.log(`Hello!`);
// }

// console.log('Out of loop');


// const user123 = ['YouRa', 'Gomon', '1987', 'developer', ['Alena', 'Anna'], false];

// const types = [];

// for (let i = 0; i < user123.length; i++) {
//    console.log(user123[i], typeof user123[i]);

//    // types[i] = typeof user123[i];
//    // types.push(typeof user123[i]);
//    types.unshift(typeof user123[i]);
// }

// console.log(types);

// const birthYears = [1974, 1994, 2000, 2003];
// const ages = [];

// for (let i = 0; i < birthYears.length; i++) {
//    // ages[i] = 2022 - birthYears[i];
//    ages.push(2022 - birthYears[i]);
//    console.log(ages[i]);
// }

// console.log(ages);




////////////////////////////// continue & break

// const user123 = ['YouRa', 'Gomon', 1987, 'developer', ['Alena', 'Anna'], false];

// console.log('CONTINUE EXAMPLE');

// for (let i = 0; i < user123.length; i++) {
//    if (typeof user123[i] !== 'string') continue;

//    console.log(user123[i], typeof user123[i]);
// }

// console.log('BREAK EXAMPLE');

// for (let i = 0; i < user123.length; i++) {
//    if (typeof user123[i] === 'number') break;

//    console.log(user123[i], typeof user123[i]);
// }



/////////////////////////// итерация в обратном порядке (backwords iteration & loop in loop)

// const user123 = ['YouRa', 'Gomon', 1987, 'developer', ['Alena', 'Anna'], false];

// for (let i = user123.length - 1; i >= 0; i--) {
//    console.log(i, user123[i]);
// }


// console.log('loop in loop: ');

// /////////////////////////// loop in loop

// for (let exercize = 1; exercize <= 3; exercize++) {
//    console.log(`Exercize ${exercize}`);

//    for (let rep = 1; rep <= 5; rep++) {
//       console.log(`Rep ${exercize} ${rep}`);
//    }
//    console.log('Out of inner loop')
// }

// console.log('Out of outer loop')



///////////////////////////////// While loop


// console.log('/////////////FOR LOOP////////////');
// for (let rep = 1; rep <= 10; rep++) {
//    console.log(`Push ups repetition ${rep}`);
// }


// console.log('////////////WHILE LOOP//////////////');

// let rep = 1;

// while (rep <= 10) {
//    console.log(`Push ups repetition ${rep}`);
//    rep++;
// }


let diceNumber = Math.trunc(Math.random() * 6) + 1;
console.log(`DIce number before loop ${diceNumber}`);

while (diceNumber !== 6) {
   console.log(diceNumber);
   diceNumber = Math.trunc(Math.random() * 6) + 1;
}