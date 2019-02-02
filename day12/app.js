// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 29 };

// let arr = [john, pete, mary];

// const getAverageAge = arr =>
//   arr.reduce((acc, item) => acc + item.age, 0) / arr.length;

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// const unique = arr => Array.from(new Set(arr));

// let strings = [
//   'Hare',
//   'Krishna',
//   'Hare',
//   'Krishna',
//   'Krishna',
//   'Krishna',
//   'Hare',
//   'Hare',
//   ':-O'
// ];

// console.log(unique(strings)); // Hare, Krishna, :-O

// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// const toAnagramKey = str =>
//   str
//     .toLowerCase()
//     .split('')
//     .sort()
//     .toString();

// const isAnagram = (str1, str2) => toAnagramKey(str1) === toAnagramKey(str2);

// const aclean = arr => {
//   let keys = new Set();
//   return arr.filter(str => {
//     const key = toAnagramKey(str);
//     if (keys.has(key)) {
//       return false;
//     } else {
//       keys.add(key);
//       return true;
//     }
//   });
// };

// console.log(isAnagram('nap', 'PAN'));
// console.log(isAnagram('teachers', 'cheaters'));

// console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

// let map = new Map();

// map.set('name', 'John');

// let keys = Array.from(map.keys());

// console.log(keys);

// // Error: numbers.push is not a function
// keys.push('more');

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };

// const sumSalaries = obj => Object.values(obj).reduce((acc, cur) => acc + cur);

// console.log(sumSalaries(salaries)); // 650

// let user = {
//   name: 'John',
//   age: 30
// };

// const count = obj => Object.keys(obj).length;

// console.log(count(user)); // 2

// let user = { name: 'John', years: 30 };

// let { name, years: age, isAdmin = 'false' } = user;

// console.log(name); // John
// console.log(age); // 30
// console.log(isAdmin); // false

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };

// const topSalary = salaries => {
//   let maxKey = null;
//   let maxValue = 0;
//   for (let [key, value] of Object.entries(salaries)) {
//     if (value > maxValue) {
//       maxKey = key;
//       maxValue = value;
//     }
//   }
//   return maxKey;
// };

// console.log(topSalary(salaries));
