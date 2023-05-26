function reverseString(str) {
   let splitString = str.split("");
   let reverseArray = splitString.reverse();
   let joinArray = reverseArray.join("");

   return console.log(`5.4 - ${str} наоборот -  ${joinArray}`);
}

reverseString("Hello");

function randomInteger(min, max) {
   let rand = min + Math.random() * (max + 1 - min);
   return console.log(`5.4 - Рандомное число от ${min} до ${max} - ${Math.floor(rand)}`);
}

randomInteger(0, 100);