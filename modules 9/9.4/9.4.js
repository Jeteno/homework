const resultNode = document.querySelector('.result-node');
const btnSubmit = document.getElementById('dtnSudmit');

function imgReqest (page, limit) {
   fetch(`http://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=${limit}`)
   .then((response) => {
      return response.json()
   })
   .then((data) => {
      console.log(data);
      displayResult(data)
   })
   .catch((err) => {console.log('error', err)});
}

function displayResult(apiData) {
   let cards = '';

   apiData.forEach(item => {
      const cardBlock = `
      <div class="card">
         <img 
            src="${item.url}" 
            class="card-img"
         />
      </div>
      `;

      cards = cards + cardBlock;
   });

   resultNode.innerHTML = cards;
};

btnSubmit.addEventListener('click', () => {
   let page = +document.getElementById('page-number').value;
   let limit = +document.getElementById('limit').value;

   if (typeof page !== 'number' && typeof limit !== 'number') {
      alert('Номер страницы и лимит вне диапазона от 1 до 10');
   } else if (isNaN(page) && isNaN(limit)) {
      alert('Номер страницы и лимит вне диапазона от 1 до 10');
   } else if (page < 1 || page > 10 ) {
      alert('Номер страницы вне диапазона от 1 до 10');
   } else if (limit < 1 || limit > 10 ) {
      alert('Лимит вне диапазона от 1 до 10');
   } else {
      imgReqest(page, limit, displayResult);
   }
});

document.addEventListener('DOMContentLoaded', function() {
   let formData = {};
   const form = document.querySelector('form');
   const LS = localStorage;

   form.addEventListener('input' , function(event) {
      formData[event.target.name] = event.target.value;
      LS.setItem('formData', JSON.stringify(formData));
   });

   if (LS.getItem('formData')) {
      formData = JSON.parse(LS.getItem('formData'));
      for (let key in formData) {
         form.elements[key].value = formData[key];
      }
   }
})