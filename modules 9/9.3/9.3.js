const resultNode = document.querySelector('.result__node');
const btnSubmit = document.getElementById('dtnSudmit');

function imgRequest (width, height, callback) {
   fetch(`https://dummyimage.com/${width}x${height}`)
      .then((response) => {
         console.log(response);
         if (callback) {
            callback(response);
         }
      })
      .then((data) => {
         console.log(data)
      })
      .catch(() => {console.log('error')});
}

function displayResult(apiData) {
   resultNode.innerHTML = `
   <div class="card">
      <img 
         src="${apiData.url}" 
         class="card-img"
      />
   </div>
   `;
};

btnSubmit.addEventListener('click', () => {
   let width = +document.getElementById('width').value;
   let height = +document.getElementById('height').value;

   if (typeof width !== 'number' && typeof height !== 'number') {
      alert('Вы ввели не число');
   } else if (isNaN(width) || isNaN(height)) {
      alert('Вы ввели не число');
   } else if (width < 100 || width > 300 || height < 100 || height > 300) {
      alert('Одно из чисел вне диапазона от 100 до 300');
   } else {
      imgRequest(width, height, displayResult);
   }
});