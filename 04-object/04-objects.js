
const person = {
  name: 'Luba',
  age: 25,
  isYou: true,
  lang: ['ru', 'en'],
  adress: {
    city: 'Pupkin',
    street: 'Dubkin',
  },
  'complex key': 'comlex',
  [1 + 2]: 'computed value',
  greet() {
    console.log('Greeet from', this);
  },
  arrow: () => {                    ////
    console.log('person', this);    //// Не перенимает контекст текущего объекта
  },                                ////Перенимае контекст Windows
  info() {
    console.log(this);
    console.log(this.name);
  },

};

// console.log(person);
// person.greet();
// person.arrow();
// person.info();

// console.log(person.adress);
// console.log(person['adress']);
// console.log(person['complex key']);

// const adressKey = 'adress';
// console.log(person[adressKey]);

// person.age++;
// console.log(person.age);

// person.lang.push('de');
// console.log(person.lang);

// person.adress = undefined;
// console.log(person);

// delete person.adress;
// console.log(person);

//========================Деструктуризация=============//

// const age = person.age;
// const name = person.name;
// console.log(age, name);

// const { age, name: firstName = 'Test', lang } = person;
// console.log(age, firstName, lang);

//=================Перебор объекта=================//

// for (let key in person) {
//   // console.log(key);
//   if (person.hasOwnProperty(key)) {
//     console.log(person[key]);
//   }
// }

// console.dir(Object);

// const keys = Object.keys(person);
// console.log(keys);

// keys.forEach((key) => {
//   console.log(person[key]);
// });

// Object.keys(person).forEach((key) => {
//   console.log(person[key]);
// });

//=====================Контекст this====================//

const logger = {
  keys(/*obj*/) {
    console.log('Object keys', Object.keys(this/*obj*/));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log('Value', this[key]);
    });
  },
};

// logger.keys();
// logger.keysAndValues();

// logger.keys(person);

// const bound = logger.keys.bind(person, parametr);//Возвращает новую функцию
// bound(parametr);

// logger.keys.bind(person)();

// logger.keys.call(person, ...);//Сразу вызывае функцию, принимает неограниченное количество аргументов функции
// logger.keys.apply(person, []);//Сразу вызывае функциюб принимает два параметра второй всегда массив

//=========================Классы и наследование==========//

class Human {
  static isHuman = true;//Поле статично и ен проецируется на экземпляры класса

  humanGreet() {
    console.log('Greet human', this.name);
  }
};

class Person extends Human {
  constructor(name, age) {
    super() //функция котора вызывает родительский конструктор
    this.name = name ?? 'Undefined';
    this.age = age;
  }
  sayHello() {
    console.log('Hello', this.name);
  }
}

const person1 = new Person('Luba', 25);
console.log(person1);
person1.sayHello();

const person2 = new Person('Elena', 30);
person2.sayHello();
person2.humanGreet();

console.log(Person.isHuman);