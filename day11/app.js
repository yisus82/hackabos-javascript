// const camelize = str =>
//   str
//     .split('-')
//     .map((str, i) => (i > 0 ? str.charAt(0).toUpperCase() + str.slice(1) : str))
//     .join('');

// console.log(camelize('background-color') === 'backgroundColor');
// console.log(camelize('list-style-image') === 'listStyleImage');
// console.log(camelize('-webkit-transition') === 'WebkitTransition');
// console.log(camelize('stringWithoutHyphens') === 'stringWithoutHyphens');

// let arr = [5, 3, 8, 1];

// const filterRange = (arr, min, max) =>
//   arr.filter(item => item >= min && item <= max);

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (matching values)

// console.log(arr); // 5,3,8,1 (not modified)

// let arr = [5, 3, 8, 1];

// const filterRangeInPlace = (arr, min, max) => {
//   arr.splice(0, arr.length, ...arr.filter(item => item >= min && item <= max));
// };

// console.log(filterRangeInPlace(arr, 1, 4)); // undefined
// console.log(arr); // 3,1 (modified)

// let arr = [5, 2, 1, -10, 8];

// const sortReverse = arr => arr.sort((a, b) => a < b);

// sortReverse(arr);

// console.log(arr); // 8, 5, 2, 1, -10

// let arr = ['HTML', 'JavaScript', 'CSS'];

// const copySorted = arr => arr.slice().sort();

// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (no changes)

// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 28 };

// let users = [john, pete, mary];

// const toNamesArray = arr => arr.map(item => item.name);

// let names = toNamesArray(users);

// console.log(names); // John, Pete, Mary

// let john = { name: 'John', surname: 'Smith', id: 1 };
// let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
// let mary = { name: 'Mary', surname: 'Key', id: 3 };

// let users = [john, pete, mary];

// const mapUsers = arr =>
//   arr.map(item => ({ fullName: item.name.concat(item.surname), id: item.id }));

// let usersMapped = mapUsers(users);

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // John Smith

// let john = { name: 'John', age: 25 };
// let pete = { name: 'Pete', age: 30 };
// let mary = { name: 'Mary', age: 28 };

// let arr = [john, pete, mary];

// const sortByName = arr => arr.sort((a, b) => a.name > b.name);
// sortByName(arr);

// // now: [john, mary, pete]
// console.log(arr[1].name); // Mary

let arr = [1, 2, 3];

const shuffle = arr =>
  arr
    .map(item => ({ sort: Math.random(), value: item }))
    .sort((a, b) => a.sort - b.sort)
    .map(item => item.value);

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
