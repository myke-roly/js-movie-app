class FetchMovies {
  constructor(page, query) {
    this.API_KEY = process.env.API_KEY;
    this.API_URL = process.env.API_URL;
    this.page = page;
    this.query = query;
    this.urlMovies = `${this.API_URL}discover/movie?api_key=${this.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.page}`;
    this.urlMovie = `${this.API_URL}search/movie?&api_key=${this.API_KEY}&language=en-US&page=${this.page}&include_adult=false&query=${this.query}`;
  }
  
  async getMovies() {
    const response = await fetch(this.urlMovies);
    const movies = await response.json();
    return movies;
  }

  async getMovie() {
    const response = await fetch(this.urlMovie);
    const movie = await response.json();
    console.log(movie);
    return movie;
  }

  async getMovieId(movie_id) {
    const response = await fetch(`${this.API_URL}movie/${movie_id}?api_key=${this.API_KEY}&language=en-US`)
    const movieId = await response.json();

    console.log(movieId);
    return movieId;
  }
}

export default FetchMovies;