// const checkCancel = str =>= str === '' || !str;

// const username = prompt('Enter your username', '');

// if (checkCancel(username)) {
//   alert('Cancel');
// } else if (username === 'admin') {
//   const password = prompt('Enter your password', '');

//   if (checkCancel(password)) {
//     alert('Cancel');
//   } else if (password === 'TheMaster') {
//     alert('Welcome!');
//   } else {
//     alert('Wrong password');
//   }
// } else {
//   alert("I don't know you");
// }

const writeLetters = (letter, num) => {
  result = '';
  for (let i = 0; i < num; i++) {
    result += letter;
  }
  return result;
};

const toRoman = i => {
  let letters = [
    ['M', Math.floor(i / 1000)],
    ['D', Math.floor((i % 1000) / 500)],
    ['C', Math.floor((i % 500) / 100)],
    ['L', Math.floor((i % 100) / 50)],
    ['X', Math.floor((i % 50) / 10)],
    ['V', Math.floor((i % 10) / 5)],
    ['I', i % 5]
  ];

  let result = '';

  letters.forEach(letter => (result += writeLetters(letter[0], letter[1])));

  return result
    .replace('DCCCC', 'CM')
    .replace('LXXXX', 'XC')
    .replace('VIIII', 'IX')
    .replace('IIII', 'IV');
};

alert(toRoman(parseInt(prompt('Enter a number'))));
