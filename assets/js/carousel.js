document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const images = track.querySelectorAll('img');
        let current = 0;
        function update() {
            track.style.transform = `translateX(-${current * 100}%)`;
        }
        carousel.querySelector('.next').onclick = () => {
            current = (current + 1) % images.length;
            update();
        };
        carousel.querySelector('.prev').onclick = () => {
            current = (current - 1 + images.length) % images.length;
            update();
        };
        update();
    });
});
