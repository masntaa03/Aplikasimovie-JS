class AppBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          /* CSS untuk styling elemen kustom */
          /* ...Tambahkan gaya CSS Anda di sini... */
        </style>
        <h1>Movie Search App</h1>
        <input type="text" id="searchInput" placeholder="Search for a movie...">
        <button id="searchButton">Search</button>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);
  