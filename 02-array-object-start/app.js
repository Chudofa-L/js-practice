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
// const { title } = require("process");

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

// console.log(inputElement.value);

const notes = ['fhfhfjjfg', 'fhffhfhfhfhf'];

function render() {
  // for (let i = 0; i < notes.length; i++) {
  //   listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
  // }

  for (let note of notes) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
  }
}

render();

createBtn.onclick = () => {
  
  //   listElement.innerHTML = `
  // <li class="list-group-item d-flex justify-content-between align-items-center">
  //       <span>${inputElement.value}</span>
  //       <span>
  //         <span class="btn btn-small btn-success">&check;</span>
  //         <span class="btn btn-small btn-danger">&times;</span>
  //       </span>
  //     </li>
  //   `
  
  if (inputElement.value.length === 0) {
    return
  }
  
  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value));
  inputElement.value = '';
};

function getNoteTemplate(title) {
  return `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${title}</span>
  <span>
  <span class="btn btn-small btn-success">&check;</span>
  <span class="btn btn-small btn-danger">&times;</span>
  </span>
  </li>
  `
};