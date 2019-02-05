/*Given the string values A and B being:
  A: The price of an item.
  B: The money paid for the item.
You will need to create a function 'cashRegister' to calculate the change to give back after the purchase.
The change will need to be in the format of an array with the correct string values inside, this values can be:
HOUNDRED = 100
FIFTY = 50
TWENTY = 20
TEN = 10
FIVE = 5
TWO = 2
ONE = 1
HALFDOLLAR = 0.5
QUARTER = 0.25
DIME = 0.1
NICKLE = 0.05
PENNY = 0.01
so for example if the give values are:
  A: 23.2
  B: 25.88
  The change would be 2.68 so the output should be:
  [ 'TWO', 'HALFDOLLAR', 'DIME', 'NICKLE', 'PENNY', 'PENNY', 'PENNY' ]
  ***IF YOU FINISH TRY TO MAKE IT WORK IF THE NUMBERS ARE***
  A: $_sdfvdsf,23.2fsdcds
  B: fvfdv-vs,25.88fdsdf
*/

const toNumber = str => str.match(/[0-9]+.[0-9]+/);

const substractMoney = (num1, num2) =>
  +(num1.toFixed(2) - num2.toFixed(2)).toFixed(2);

const cashRegister = (price, money) => {
  price = +toNumber(price);
  money = +toNumber(money);
  if (!price || !money || money < price) {
    return [];
  }
  const HOUNDRED = 100;
  const FIFTY = 50;
  const TWENTY = 20;
  const TEN = 10;
  const FIVE = 5;
  const TWO = 2;
  const ONE = 1;
  const HALFDOLLAR = 0.5;
  const QUARTER = 0.25;
  const DIME = 0.1;
  const NICKLE = 0.05;
  const PENNY = 0.01;
  const coins = [
    [HOUNDRED, 'HOUNDRED'],
    [FIFTY, 'FIFTY'],
    [TWENTY, 'TWENTY'],
    [TEN, 'TEN'],
    [FIVE, 'FIVE'],
    [TWO, 'TWO'],
    [ONE, 'ONE'],
    [HALFDOLLAR, 'HALFDOLLAR'],
    [QUARTER, 'QUARTER'],
    [DIME, 'DIME'],
    [NICKLE, 'NICKLE'],
    [PENNY, 'PENNY']
  ];
  let change = substractMoney(money, price);
  let changeArray = [];

  while (change > 0) {
    coins.forEach(([value, name]) => {
      while (change >= value) {
        changeArray.push(name);
        change = substractMoney(change, value);
      }
    });
  }

  return changeArray;
};

alert(cashRegister(prompt('Enter price', 0), prompt('Enter money', 0)));
