const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function parityOfNumbers(arr) {
   let evenNumbers = 0;
   let oddNumbers = 0;
   let zeroNumbers = 0;
   
   arr.forEach(item => {
      if(typeof item === 'number' && !isNaN(item)){
         if (item % 2 === 0) {
            evenNumbers++;
         } else if (item % 2 !== 0) {
            oddNumbers++;
         } else {
            zeroNumbers++;
         } 
      } 
   })
   
   console.log(`В массиве: ${evenNumbers} - четных чисел, ${oddNumbers} - нечетных чисел и ${zeroNumbers} - нулей`);
}

parityOfNumbers(numbers);