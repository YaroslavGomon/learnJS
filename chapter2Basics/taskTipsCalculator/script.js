// let tips;


// const calculateTips = (bill) => {
//    if (bill <= 20) {
//       tips = bill * 0.2;
//    } else {
//       tips = bill * 0.15;
//    }
//    return tips;
// }

// bill = [11, 20, 47];

// console.log(bill);
// console.log(tips = [calculateTips(11), calculateTips(20), calculateTips(47)]);

// const total = tips.concat(bill);

// console.log(total);





// const calculateTips = bill => bill <= 20 ? bill * 0.2 : bill * 0.15;

// const bills = [11, 20, 47];
// const tips = [calculateTips(bills[0]), calculateTips(bills[1]), calculateTips(bills[2])];
// const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totalBills);





////////////////////// Task loops

const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 95, 57];
const tips = [];
const totalBills = [];

const calculateTips = bill => bill <= 20 ? bill * 0.2 : bill * 0.15;

for (let i = 0; i < bills.length; i++) {
   tips.push(Math.trunc(calculateTips(bills[i])));
   totalBills.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totalBills);


// let sum = 0;
// for (i = 0; i < totalBills.length; i++) {
//    sum = sum + totalBills[i];
// }

// console.log(sum);
// console.log(sum / totalBills.length);


const calculateAverage = function (arr) {
   let sum = 0;
   for (i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
   }
   return sum / arr.length;
}

console.log(calculateAverage(bills));
console.log(calculateAverage(tips));
console.log(calculateAverage(totalBills));