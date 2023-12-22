
btn.addEventListener("click", clickFunc);
function clickFunc(){
	window.location.href="http://www.facebook.com";
}

const slides = document.querySelectorAll('.slide');
let index = 0;

function prevSlide(){
    slides[index].classList.remove('active');
    index--;

    if(index < 0)
        index = slides.length -1;

    slides[index].classList.add('active');      
}

document.querySelector('.prev').addEventListener('click', e => {
    prevSlide();
});

function nextSlide(){
    slides[index].classList.remove('active');
    index++;

    if(index > slides.length -1)
        index = 0;

    slides[index].classList.add('active');      
}

document.querySelector('.next').addEventListener('click', e => {
    nextSlide();
});
