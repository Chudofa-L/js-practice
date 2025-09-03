//===============Even Loop==================//

// const timeout = setTimeout(() => {
//   console.log('Heloo 2');
// }, 2000);

// clearTimeout(timeout);

// setTimeout(() => {
//   console.log('timeout 3');
// }, 3000);

// count = 0;
// setInterval(() => {
//   console.log('tick', ++count);
// }, 1000);

// function delay(callback, time = 1000) {
//   setTimeout(callback, time);
// };

// delay(() => {
//   console.log('Delay');
// }, 2000);

const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4])
      reject('Error in delay')
    }, time)
  });
  return promise;
};

// delay(2500)
//   .then((data) => {
//     console.log(data);
//     return data.map(x => x ** 2)
//   })
//   .then((data) => {                 //Чейнинг
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => console.log('finally'));

const getData = () => new Promise(resolve => resolve([1, 2, 3]));

// getData().then((array) => console.log(array))

async function asyncExample() {
  try {
    await delay(3000)
    const data = await getData();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('finallt');
  }
};

asyncExample();