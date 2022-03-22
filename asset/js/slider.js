const bg = [
    'https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/207085/pexels-photo-207085.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/169579/plums-fruit-fruit-basket-blue-169579.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]

const slides = document.querySelectorAll(".slide");

slides.forEach((slide, idx) => {
    slide.style.backgroundImage = `url("${bg[idx]}")`;

    slide.addEventListener("click", (e) => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});