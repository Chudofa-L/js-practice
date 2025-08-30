const num = 42; // integer
const float = 42.42; // float
const pow = 10e3; //Число в степени
console.log(pow);

const negative = -736367;

const big = 1_000_000_000;
console.log(big);

console.dir(Number);
console.log(Number.MAX_SAFE_INTEGER); // Самое большое число в JS
console.log(Math.pow(2, 53) - 1);
console.log(Number.MIN_SAFE_INTEGER); // Самое маленикое число в JS
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(1 / 0);
console.log(Number.isFinite(1 / 0));

const weird = 23 / undefined;
console.log(Number.isNaN(weird));

// ====================Парсинг значений=====================//

const strInt = '42';
const strFloat = '32.3';

console.log(Number(strInt));
console.log(Number(strFloat));

console.log(parseInt(strInt));
console.log(parseFloat(strFloat));

console.log(+strInt, +strFloat);

console.log(0.1 + 0.2);
console.log(+(0.1 + 0.2).toFixed(1));

// ========================BigInt======================//

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 82633892n);

// console.log(10n - 4); ERROR
console.log(parseInt(10n) - 4);
console.log(10n - BigInt(4));
console.log(5n / 2n);

// =====================Math=========================//

console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(25));
console.log(Math.pow(2, 7));
console.log(Math.abs(-42));
console.log(Math.max(2, 2, 3, 56, 422, 33, 445));
console.log(Math.min(2, 2, 3, 56, 422, 33, 445));

console.log(Math.floor(4.9));
console.log(Math.ceil(4.9));
console.log(Math.round(4.9));
console.log(Math.trunc(4.9));

console.log(Math.random());

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const num1 = getRandomNumber(10, 100);

console.log(num1);