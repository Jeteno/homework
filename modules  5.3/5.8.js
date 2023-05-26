let myMap = new Map([
   ["name", "Максим"],
   ["surname", "Сытов"],
]);

function myData(obj) {
   for (let name of obj.keys()) {
      console.log(`Ключ - ${name}`); 
   }
   
   for (let prop of obj.values()) {
      console.log(`Значение - ${prop}`); 
   }
}

myData(myMap)