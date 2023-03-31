
function oneMovie(movie){
    const card = document.createElement('li');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="${movie.poster}">
        <div class="content">
            <h4>${movie.title}</h4>
            <p>${movie.description}</p>
        </div>
    `
    
    return card;
}

function clickMovie(){
    const movieList = document.getElementById('movie-list'); // get the container element for the movie cards
    fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                const card = oneMovie(movie);
                movieList.appendChild(card); // append the card element to the movieList element
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

clickMovie(); // call the function to retrieve and display the movie data
