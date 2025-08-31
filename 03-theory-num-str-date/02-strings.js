const firstName = 'Luba';
const age = 14;

// const output = `any
//                 ddjd
//                 sddd`;

function getAge() {
  return age;
};

const old = 'Hello ' + name;
const output = `Hello ${name} ${getAge() > 18 ? 'can' : "can't"}`;

console.log(output);

console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(2));
console.log(firstName.indexOf('a'));
console.log(firstName.startsWith('Lu'));
console.log(firstName.toLowerCase().startsWith('lu'));
console.log(firstName.endsWith('ba'));
console.log(firstName.repeat(2));

const password = '     pass';

console.log(password);
console.log(password.trim());