function useRequest(url, callback) {
   let xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);
   
   xhr.onload = function() {
      if (xhr.status !== 200) {
         console.log('Статус ответа: ', xhr.status);
      } else {
         const result = JSON.parse(xhr.response);
         console.log(result);
         if (callback) {
            callback(result);
         }
      }
   };

   xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
   };

   xhr.send();
};

const btn = document.querySelector('.button'); 
const input = document.querySelector('.limit');
const resultNode = document.querySelector('.result__node');

function displayResult(apiData) {
   let cards = '';

   apiData.forEach(item => {
      const cardBlock = `
      <div class="card">
         <img 
            src="${item.thumbnailUrl}" 
            class="card-img"
         />
      </div>
      `;

      cards = cards + cardBlock;
   });

   resultNode.innerHTML = cards;
};

btn.addEventListener('click', () => {
   let value = input.value;

   if (value > 10 || value < 1) {
      alert ('Число вне диапазона от 1 до 10')
   } else {
      useRequest(`https://jsonplaceholder.typicode.com/photos?_limit=${value} `, displayResult);
   }
});

