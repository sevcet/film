let currentImageIndex = 0;
const images = document.querySelectorAll('.rectangle');

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            showImage(currentImageIndex - 1);
            break;
        case 'ArrowRight':
            showImage(currentImageIndex + 1);
            break;
        case 'ArrowUp':
            showImage(currentImageIndex - 6); // Promeni broj u zavisnosti od broja slika u redu
            break;
        case 'ArrowDown':
            showImage(currentImageIndex + 6); // Promeni broj u zavisnosti od broja slika u redu
            break;
    }
});

function showImage(index) {
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }

    images[currentImageIndex].classList.remove('active');
    images[index].classList.add('active');
    currentImageIndex = index;
}