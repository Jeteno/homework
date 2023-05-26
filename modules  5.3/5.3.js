let meaning = prompt('Пожалуйста, введите Ваше значение');

function getValue(obj){
   let values = +obj;

   if(isNaN(values)){
      console.log('Упс, кажется, вы ошиблись');
   } else if (values % 2 === 0) {
      console.log('Это число четное');
   } else {
      console.log('Это число нечетное');
   }
}

getValue(meaning);

const x = 1; 

function typeDefinition(obj){
   if (typeof obj === 'number') {
      console.log(`${obj} - число`);
   } else if (typeof obj === 'string') {
      console.log(`${obj} - строка`);
   } else if (typeof obj === 'boolean') {
      console.log(`${obj} - логический тип`);
   } else {
      console.log(`Тип ${obj} не определён`);
   }
}

typeDefinition(x);