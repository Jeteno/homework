let values = prompt('Введите число от 0 до 1000');
let number = +values;

function definitionOfNumber (obj) {
   let result = `${obj} - является простым числом`;

   if (obj <= 1 || obj >= 1000) {
      result = 'ответ не верный';
   } else {
      for (let i = 2; i < obj; i++) {
         if (obj % i === 0) {
            result = `${obj} - является составным числом`;
            break;
         } 
      }   
   }
   console.log(result);
}

definitionOfNumber (number);