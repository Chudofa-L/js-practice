// =======================Function Declaration===================//

// Можно вызвать до описания//

greet('luba');

function greet(name) {
  console.log('Hello', name, 1);
};

// =======================Function Expression=====================//

// Вызов только после иницианализации//

const greet2 = function (name) {
  console.log('Hello -', name, 2);
};

greet2('Buba');

console.log(typeof greet2);
console.dir(greet);

// ====================================================//

setTimeout(function () {
  // greet('Pupa')
  console.log('Timeout', 3);
}, 1500);

let counter = 0;

// const interval = setInterval(function () {
//   greet2('Muma');
//   console.log('Good');
//   console.log(Math.random());
//   if (counter === 5) {
//     clearInterval(interval);
//   } else {
//     console.log(++counter);
//   }
// }, 2500);

//=========================Arrow Functions=====================//

const arrow = (name) => {
  console.log('Heloo:', name, 4);
}

const arrow2 = (name) => console.log('Hi', name, 5);

function pow(num, exp) {
  return Math.pow(num, exp);
};

const pow2 = (num, exp) => Math.pow(num, exp);

arrow('Nuna');
arrow2('Fufa');
console.log(pow(2, 3));
console.log(pow2(3, 2));

// ========================Defoult Parameters=====================//

const sum = (a = 10, b = a / 2) => a + b;

console.log(sum(2, 4));
console.log(sum(2));
console.log(sum());

function sumAll(...numbers) {
  // console.log(numbers);
  // let res = 0;

  // for (let num of numbers) {
  //   res += num;
  // }

  // return res;

  return numbers.reduce((acc, cur) => (acc += cur), 0);
};

console.log(sumAll(2, 5, 42, 74, 2, 44, 1, 6));

//========================Closures===================//

function createPerson(name) {
  return function (lastname) {
    console.log(name + ' ' + lastname);
  };
};

const addLastName = createPerson('Luba');
addLastName('Mun');
addLastName('num');