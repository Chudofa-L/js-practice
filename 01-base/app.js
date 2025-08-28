// let num = 42;
// let firstName = 'Labuba';

// num = 10;

// const isProgrammer = true;
// let trueNum = true;
// trueNum = false;

// console.log(trueNum);

/* Can do/Можно
let $ = 'test';
let $num = 43;
let num$ = 43;
let _ = 32;
let _num = 12;
let num_ = 12;
let firstUser = "popka";
let num42 = 10;
*/

/*Restricted/Нельзя
let 42num = 42;
let my-num = 1;
let const = 0;
*/

// alert(firstName);

//BaNaNa
// console.log(`Ba${num / firstName}a`, 'Ba' + num / firstName + 'a');

const resultElemet = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divisionBtn = document.getElementById('division');


let action = '+';

minusBtn.onclick = function () {
  action = '-';
};

plusBtn.onclick = function () {
  action = '+';
};

multiplyBtn.onclick = () => {
  action = '*';
};

divisionBtn.onclick = () => {
  action = '/'
}

function printResult(result) {
  if (result < 0) {
    resultElemet.style.color = 'red';
  } else {
    resultElemet.style.color = 'green';
  }
  resultElemet.textContent = result;
};

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  if (actionSymbol === '+' || actionSymbol === '-') {
    return actionSymbol === '+' ? num1 + num2 : num1 - num2;
  } else {
    return actionSymbol === '*' ? num1 * num2 : num1 / num2;
  }


  // if (actionSymbol === '+') {
  //   return num1 + num2;
  // } else if (actionSymbol === '-') {
  //   return num1 - num2;
  // }
};

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action)
  printResult(result);

  // if (action === '+') {
  //   const sum = Number(input1.value) + Number(input2.value);
  //   printResult(sum);
  // } else if (action === '-') {
  //   const sum = Number(input1.value) - Number(input2.value);
  //   printResult(sum);
  // }
};


// console.log(input2.value);
// console.log(resultElemet.textContent);
// resultElemet.textContent = 15;