import imageNotFound from '../images/image-not-found.jpg';

class UI {
  constructor(id, title, popularity, image) {
    this.ulrImage = 'https://image.tmdb.org/t/p/w200';
    this.popularity = popularity;
    this.image = image;
    this.title = title;
    this.id = id; 
  }

  displayMovies() {
    if (!this.image) return ''; 
    let display = `
      <div class="col-lg-3 col-sm-6 col-xsm-6 col-md-4 text-center" id=${this.id}>
        <img src=${this.ulrImage ? this.ulrImage : imageNotFound}${this.image} class="mb-2 img__movie" id=${this.id} />
        <h2 class="small text-uppercase" id=${this.id}>${this.title}</h2>
        <p class="text-warning" id=${this.id}>${this.popularity}</p>
      </div>
    `;

    return display;
  }
}

export default UI;
