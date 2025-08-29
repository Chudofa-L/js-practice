// // ===================== Theory

// const array = [1, 2, 3, 4, 5, 9];
// // const arrayString = ['a', 'b', null, 11];
// // const arr = new Array(1, 2, 3, 4);

// // console.log(arrayString);
// console.log(array.length);
// console.log(array[1]);
// console.log(array[array.length - 1]);

// array[0] = 'hy!'
// array[array.length] = 'dog';
// console.log(array);

// const inputElement = document.getElementById('title');
// const createBtn = document.getElementById('create');
// const listElement = document.getElementById('list');

// console.log(inputElement.value);

// const notes = ['Приветик<3', 'Записочка <3 <3'];

// function render() {
//   // for (let i = 0; i < notes.length; i++) {
//   //   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
//   // }

//   for (let note of notes) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
//   }
// }

// render();

// createBtn.onclick = () => {

//   listElement.innerHTML = `
// <li class="list-group-item d-flex justify-content-between align-items-center">
//       <span>${inputElement.value}</span>
//       <span>
//         <span class="btn btn-small btn-success">&check;</span>
//         <span class="btn btn-small btn-danger">&times;</span>
//       </span>
//     </li>
//   `

//   if (inputElement.value.length === 0) {
//     return
//   }

//   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value));
//   inputElement.value = '';
// };

// function getNoteTemplate(title) {
//   return `
//   <li class="list-group-item d-flex justify-content-between align-items-center">
//   <span>${title}</span>
//   <span>
//   <span class="btn btn-small btn-success">&check;</span>
//   <span class="btn btn-small btn-danger">&times;</span>
//   </span>
//   </li>
//   `
// };

/*
==========================Object==============================

const obj = {
  name: 'Vitya',
  lastName: 'Volvo',
  year: 54,
  hiGirl: false,
  lang: ['ru', 'en'],
  getFullName: function () {
    console.log(obj.name + ' ' + obj.lastName + ' ' + obj.lang);
  },
}
console.log(obj.getFullName());
console.log(obj['year']);

const key = 'hiGirl';
console.log(obj[key]);

obj.year = 38;
console.log(obj.year);
*/

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

const notes = [{
  title: 'Приветик<3',
  completed: false,
},
{
  title: 'Записочка <3 <3',
  completed: true,
}];

function render() {
  listElement.innerHTML = '';

  if (notes.length === 0) {
    listElement.innerHTML = '<p>Нет заметок</p>'
  };

  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
  }
}

render();

createBtn.onclick = () => {
  if (inputElement.value.length === 0) {
    return
  }

  const newNote = {
    title: inputElement.value,
    comleted: false,
  };

  notes.push(newNote);
  render();
  inputElement.value = '';
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === 'toggle') {
      console.log('toggle', index);

      notes[index].completed = !notes[index].completed;
    } else if (type === 'remove') {
      console.log('remove', index);

      notes.splice(index, 1)
    };

    render();
  };
}

function getNoteTemplate(note, index) {
  return `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span class='${note.completed ? 'text-decoration-line-through' : ''}'>${note.title}</span>
  <span>
  <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index='${index}' data-type='toggle'>&check;</span>
  <span class="btn btn-small btn-danger" data-index='${index}' data-type='remove'>&times;</span>
  </span>
  </li>
  `
};