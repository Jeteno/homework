let oneValues = prompt('Введите число');
let oneNumber = +oneValues;

let twoValues = prompt('Введите число');
let twoNumber = +twoValues;

function outside(x) {
   function inside(y) {
      let sumNumber = x + y;
     return console.log(sumNumber);
   }
   return inside;
} 
 
const result = outside(oneNumber)(twoNumber); 