//7.1.1
const fruits = {
   apple: "grin",
   orange: "orange"
}

function valueOutput (obj) {
   for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
         console.log(`ключ - ${key}, значение - ${obj[key]}`);
      } else {
         console.log("В объекте имеются прототип")
      }
   }   
}

valueOutput(fruits);

//7.1.2
const personalData = {
   name: "Maksim",
   surname: "Sytov",
   age: 22
}

const line = "developer";

function dataAcquisition (obj, line) {
   let result = 'surname'in obj;
   return console.log(result);
}

dataAcquisition(personalData, line);

//7.1.3
function objectCreation () {
   const testObject = Object.create(null);

   return console.log(testObject);
}

objectCreation();

//7.2
