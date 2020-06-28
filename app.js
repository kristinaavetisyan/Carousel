const nextSlide = document.querySelector('.right-slide');
const prevSlide = document.querySelector('.left-slide');
let img = document.querySelector('img');
let playButton = document.querySelector('.playButton');
let pauseButton = document.querySelector('.pauseButton');

let images = [
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic1.jpg"
];

const allSlides = images.length;
let index = 0;

nextSlide.onclick = function () {
    next("next");
}

prevSlide.onclick = function () {
    next("prev");
}

function next(position) {
    if (position == "next") {
        index++;
        if (index == allSlides) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = allSlides - 1;
        } else {
            index--;
        }
    }

    img.removeAttribute('src');
    img.setAttribute('src', `${images[index]}`);
}

function slideShow() {
    playButton.addEventListener('click', () => {
        playButton.style.color = '#8FBC8F'; 
        let play = setInterval(next, 4000);
        pauseButton.addEventListener('click', () => {
            clearInterval(play);
            playButton.style.color = 'black';
        })
    })
}
slideShow();
