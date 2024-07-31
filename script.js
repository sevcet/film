function searchImages() {
    var searchValue = document.getElementById('search').value.toLowerCase();
    var rectangles = document.querySelectorAll('.rectangle');

    rectangles.forEach(function(rectangle) {
        var img = rectangle.querySelector('img');
        var altText = img.alt.toLowerCase();

        rectangle.classList.remove('highlight');
        if (altText.includes(searchValue)) {
            setTimeout(function() {
                rectangle.classList.add('highlight');
                rectangle.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100); // Mali delay da bi se osiguralo da se klasa highlight doda ispravno
        }
    });
}

document.getElementById('searchButton').addEventListener('click', searchImages);
document.getElementById('search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchImages();
    }
});
