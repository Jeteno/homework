let fromValues = prompt('Введите число, от которого начнется отсчет');
let fromNumber = +fromValues;

let beforeValues = prompt('Введите число, которым закончится отсчет');
let beforeNumber = +beforeValues;

function countdown (from, to) {
   let current = from;

   let timerId = setInterval(function () {
      console.log(current);

      if (current == to) {
         clearInterval(timerId);
      }
      current++;
   }, 1000);
}

countdown (fromNumber, beforeNumber);