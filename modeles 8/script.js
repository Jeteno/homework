const sliderImg = ['img/9019533.jpg', 'img/953.jpg', 'img/8980098.jpg', 'img/8855563.jpg'];
const nextSlider = document.querySelector('.slider-next');
const prevSlider = document.querySelector('.slider-prev');
const section = document.getElementById('section');
const imgSlider = document.createElement("img");
let current = +section.getAttribute('data-current');

imgSlider.src = sliderImg[current];
section.appendChild(imgSlider);

imgSlider.style.width = '100%';
imgSlider.style.height = '100%';

imgSlider.classList.add("sliderImg");

nextSlider.addEventListener('click', function(){
   current++;

   if(current >= sliderImg.length) {
      current = 0;
   } 

   updateSlide();

});

prevSlider.addEventListener('click', function(){
   current--;

   if(current < 0) {
      current = sliderImg.length - 1;
   } 

   updateSlide();

});

const updateSlide = () => {
   imgSlider.src = sliderImg[current];
   section.setAttribute('data-current', current);
}