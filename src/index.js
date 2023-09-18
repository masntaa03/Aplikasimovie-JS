import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const movieList = document.getElementById('movieList');

    // Tambahkan event listener untuk tombol pencarian
    searchButton.addEventListener('click', async () => {
        const query = searchInput.value;

        try {
            // Buat permintaan AJAX menggunakan Axios
            const response = await axios.get('https://www.omdbapi.com/', {
                params: {
                    s: query,
                    apikey: 'ceddf8b0'
                }
            });

            const data = response.data;
            if (data.Response === 'True') {
                
                displayMovies(data.Search);
            } else {
                
                alert('No movies found');
                movieList.innerHTML = ''; 
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            movieList.innerHTML = 'An error occurred while fetching data';
        }
    });

    const displayMovies = (movies) => {
        movieList.innerHTML = ''; 

        movies.forEach((movie) => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');

            movieCard.innerHTML = `
                <h2>${movie.Title}</h2>
                <p>Year: ${movie.Year}</p>
                <p>Type: ${movie.Type}</p>
                <img src="${movie.Poster}" alt="${movie.Title}">
            `;

            movieList.appendChild(movieCard);
        });
    };
});
