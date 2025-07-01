const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__imagee img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 200,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".featurette h2", {
    ...scrollRevealOption,
    delay: 200,
});
ScrollReveal().reveal(".featurette li", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".katalog_2", {
    ...scrollRevealOption,
    delay: 400,
});

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

//-------------------------------------------making purchases green and red---------------------------------------------
const number = document.querySelectorAll(".narudzbina-broj-x").length;
function e(i) {
    document.querySelectorAll(".uspeh")[i].addEventListener("click", function() {
        document.querySelectorAll(".listni-item")[i].classList.toggle("listni-item-zeleni");
    });
    document.querySelectorAll(".neuspeh")[i].addEventListener("click", function() {
        document.querySelectorAll(".listni-item")[i].classList.toggle("listni-item-crveni");
    });
}
for(var i = 0; i < number; i++) {
    e(i);
}