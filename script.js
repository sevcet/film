function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
    } else {
        sidebar.style.left = '0px';
    }
}

function searchMovies() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');
    let found = false;

    movieCards.forEach(card => {
        const title = card.querySelector('.movie-info h3').textContent.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (found) {
        window.scrollTo({ top: document.querySelector('.movie-grid').offsetTop, behavior: 'smooth' });
    }
}
