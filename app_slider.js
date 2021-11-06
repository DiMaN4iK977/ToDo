const sliders = document.querySelectorAll(".slide");
let slidersInterval = setInterval(nextSlide, 2000);

let currentSlide = randomSlide(0, sliders.length - 1);
sliders[currentSlide].className = 'slide active';

function nextSlide() {
    sliders[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1)%sliders.length;
    sliders[currentSlide].className = 'slide active';
}

function randomSlide(min, max) {
    let number = min + Math.random()*(max + 1 - min);
    return Math.floor(number);
}

const sliderss = document.querySelectorAll(".slides");
let slidesInterval = setInterval(nextSlides, 3000);

let currentSlides = randomSlides(0, sliderss.length - 1);
sliderss[currentSlides].className = 'slide active';

function nextSlides() {
    sliderss[currentSlides].className = 'slides';
    currentSlides = (currentSlides + 1)%sliderss.length;
    sliderss[currentSlides].className = 'slides active';
}

function randomSlides(min, max) {
    let number = min + Math.random()*(max + 1 - min);
    return Math.floor(number);
}

