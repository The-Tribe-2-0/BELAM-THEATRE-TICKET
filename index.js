function oneMovie(movie) {
    const card = document.createElement('li');
    card.className = 'card';
    card.innerHTML = `
        <img src="${movie.poster}">
        <div class="content">
            <h4>${movie.title}</h4>
            <p>${movie.description}</p>
            <p>SHOWTIME:${movie.showtime}</p>
        </div>
    `;
    return card;
}

function clickMovie() {
    const movieList = document.getElementById('movie-list');
    fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                const card = oneMovie(movie);
                movieList.appendChild(card);
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });
}



// Adding a listener to the window to call clickMovie() once the DOM is loaded
window.addEventListener('DOMContentLoaded', clickMovie);
