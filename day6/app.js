// let calculator = {
//   read(numOfValues = 2) {
//     for (let i = 0; i < numOfValues; i++) {
//       this['op' + i] = +prompt('Enter a numeric value', 0);
//     }
//   },
//   sum() {
//     result = 0;
//     for (key in this) {
//       if (typeof this[key] === 'number') {
//         result += this[key];
//       }
//     }
//     return result;
//   },
//   mul() {
//     result = 1;
//     for (key in this) {
//       if (typeof this[key] === 'number') {
//         result *= this[key];
//       }
//     }
//     return result;
//   }
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// function Salute(fun, name) {
//   this.name = name;
//   this.hi = function() {
//     if (this.name.toLowerCase().includes('a')) {
//       return fun(this.name);
//     } else {
//       return '';
//     }
//   };
// }

// const standardSalute = name => 'Hi ' + name;
// let salute = new Salute(standardSalute, 'John');
// alert(salute.hi());
// salute = new Salute(standardSalute, 'Marta');
// alert(salute.hi());
// salute = new Salute(standardSalute, 'Antonio');
// alert(salute.hi());

// class Animal {}

// class Rabbit extends Object {
//   constructor() {
//     super();
//   }
// }

// let rabbit = new Rabbit();
// console.log(rabbit);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit('White Rabbit'); // Error: this is not defined
// alert(rabbit.name);
