function comparisonElements(array) {
   for (let i = 0; i < array.length - 1; i++) {
      if(array[i] !== array[i + 1]) {
         console.log(`5.6 - ${false}`);
      } else {
         console.log(`5.6 - ${true}`);
      }
   }
}

comparisonElements([1, 1, 1]);