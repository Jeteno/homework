let baseOfDegree = prompt('Введите основание степени');
let x = +baseOfDegree;

let sepenityIndicator = prompt('Введите показатель степени');
let n = +sepenityIndicator;

const exponentiation = (base, exponent) => {
   let result = Math.pow(base, exponent);

   console.log(`${base} в ${exponent} степени будет равно ${result}`);
}

exponentiation(x, n);