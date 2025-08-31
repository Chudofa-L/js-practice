// console.log(new Date());

// const now = new Date();
// console.log(now);

// const start = new Date(1000 * 60 * 60 * 24 * 365);
// console.log(start);

// const date = new Date(2011, 0, 1, 12, 42, 12);
// console.log(date);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());

// now.setFullYear(2035);
// console.log(now);

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());

// =========================Clock======================//

let mode = 'time';
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

function bindMode(name) {
  return function () {
    mode = name;
    update()
  };
};

fullBtn.onclick = bindMode('full');
// fullBtn.onclick = function () {
//   mode = 'full';
//   update()
// };

dateBtn.onclick = bindMode('date');
// dateBtn.onclick = function () {
//   mode = 'date';
//   update()
// };

timeBtn.onclick = bindMode('time');
// timeBtn.onclick = function () {
//   mode = 'time';
//   update()
// };

setInterval(update, 1000);
update()

function update() {
  output.textContent = format(mode)
}

//Pure Function
function format(formatMode) {
  const now = new Date()

  switch (formatMode) {
    case 'time':
      return now.toLocaleTimeString() // + '.' + now.getMilliseconds();
    case 'date':
      return now.toLocaleDateString();
    case 'full':
      return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString();
  };
};
