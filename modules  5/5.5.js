const arbitraryArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(`5.5 - Количество элементов в массиве - ${arbitraryArray.length}`);

let resultArray = arbitraryArray.map(function(item, index, arbitraryArray) {
   return console.log(item);
})