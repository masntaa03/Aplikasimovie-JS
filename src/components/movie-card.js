class MovieCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        /* CSS untuk styling elemen kustom */
        .movie {
          border: 1px solid #ccc;
          padding: 10px;
          margin: 10px;
          width: 300px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
          cursor: pointer;
        }

        .movie:hover {
          transform: scale(1.05);
        }

        img {
          max-width: 100%;
        }
      </style>
      <div class="movie">
        <img src="" alt="">
        <h2></h2>
        <p>Year: <span></span></p>
        <p>Type: <span></span></p>
      </div>
    `;

    // Tambahkan event listener saat elemen diklik
    this.shadowRoot.querySelector('.movie').addEventListener('click', () => {
      // Mendapatkan nilai film dari elemen kustom
      const movie = this.movie;

      // Membuat elemen dialog untuk menampilkan detail film
      const dialog = document.createElement('div');
      dialog.innerHTML = `
        <h2>${movie.Title}</h2>
        <img src="${movie.Poster}" alt="${movie.Title}">
        <p>Year: ${movie.Year}</p>
        <p>Type: ${movie.Type}</p>
      `;

      // Menambahkan dialog ke elemen root dokumen
      document.body.appendChild(dialog);
    });
  }

  set movie(value) {
    const shadow = this.shadowRoot;

    shadow.querySelector('img').src = value.Poster;
    shadow.querySelector('img').alt = value.Title;
    shadow.querySelector('h2').textContent = value.Title;
    shadow.querySelector('span:first-child').textContent = value.Year;
    shadow.querySelector('span:last-child').textContent = value.Type;
  }
}

customElements.define('movie-card', MovieCard);
