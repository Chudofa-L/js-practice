// const names = ['Tasya', 'Nata', 'Sergey', 'Pups'];

// ============================Добавлять=====================//
// names.push('Popka');
// names.unshift('Pipka');
// console.log(names);

// ===========================Удалять=======================//
// names.shift();
// const firstName = names.shift();
// names.pop();
// const lastName = names.pop();

// console.log(firstName, lastName);
// console.log(names);

// ==============================Перевернуть====================//
// console.log(names.reverse());
// const reversed = names.toReversed();
// console.log(names.toReversed());
// console.log(reversed);
// console.log(names);

// const letter = ['c', 'd', 'b', 'a']

// ========================Сортировка=================//
// console.log(letter.sort(
//   function (a, b) {
//   return b.charCodeAt(0) - a.charCodeAt(0);
// }
// ));

// const sorted = letter.toSorted();
// console.log(letter, sorted);

// ===============================Вырезать===================//
// console.log(names.splice(2, 1));
// console.log(names.toSpliced(1, 2));

//=========================Индекс======================//
// const greateWoman = 'Pups';
// const index = names.indexOf(greateWoman);
// // console.log(index);

// =======================Заменить======================//
// const newName = names.with(index, 'pipka');
// console.log(newName);
// names[index] = 'pipka';
// console.log(names[index]);

//=============================MAP======================//
// const capitalNames = names.map(function(name, index) {
//   if (index === 1) {
//     return 'pipka';
//   }
//   return name;
// })
// console.log(names, capitalNames);

//=====================Проверка значения===================//
// console.log(names.includes('Pups'));

// console.log(names.indexOf('Pups') !== -1);

// const people = [
//   { name: 'Pipka', user: 'Popka' },
//   { name: 'Piska', user: 'Polka' },
//   { name: 'Siska', user: 'Pup' },
// ];

// let findedPerson;

// for (let person of people) {
//   if (person.user === 'Popka') {
//     findedPerson = person;
//   }
// }

// ==========================Поиск======================== //

// const findedPenson = people.find(function(person) {
//   return person.user === 'Polka';
//   // if (person.user === 'Pup') {
//   //   return true;
//   // }
// })

// const finded = people.find((p) => p.user === 'Popka')
// console.log(finded);

// ======================Найти индекс================||
// const findedPenson = people.findIndex(function(person) {
//   return person.user === 'Pup';
//   // if (person.user === 'Pup') {
//   //   return true;
//   // }
// })

// console.log(findedPenson);
// console.log(people[findedPenson]);

// ======================Фильтр================//

// const people = [
//   { name: 'Pipka', budget: 12569 },
//   { name: 'Piska', budget: 300 },
//   { name: 'Siska', budget: 2000 },
//   { name: 'Sosiska', budget: 5200 },
//   { name: 'Popka', budget: 7369 },
// ];

// let sumBudget = 0;

// const filtered = people.filter(function (p) {
//   return p.budget > 5000;
// });

// console.log(filtered);
// filtered.forEach(function (p) {
//   sumBudget += p.budget;
// });
// console.log(sumBudget);

// console.log(people);

// const sumBudget = people
//   .filter((p) => p.budget > 5000)
//   .map(p => p.budget)
//   .reduce((acc, p) => acc + p, 0)
// console.log(sumBudget);

// =============================Строчки в Массиве================//

// const string = 'Hello, dear Pups!';
// const reversed = string
//   .split('')
//   .toReversed()
//   .join('')
//   .split('')
//   .filter(c => c === 'e')
//   .length

// console.log(reversed);