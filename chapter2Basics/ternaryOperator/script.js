// Ternary (или conditional) operator - условный оператор, это экспрешн, ткт проихводит значение

const money = 100;
const cost = 50;
// money >= cost ? console.log('You can buy it.') : console.log('You can not buy.');

const canYouBuyIt = money >= cost ? 'You can buy it.' : 'You can not buy.';
console.log(canYouBuyIt);

let canYouBuyIt1;
if (money >= cost) {
   canYouBuyIt1 = 'You can buy it.';
} else {
   canYouBuyIt1 = 'You can not buy.';
}
console.log(canYouBuyIt1);


console.log(`You can${money >= cost ? '' : ' not'} buy it.`);