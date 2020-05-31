import './style.scss';
import { Layout } from './components/layout/layout';
import { PopularMovies } from './components/popularMovies/popularMovies';;

function App() {
  const Main = PopularMovies();
  const layout = Layout(Main);
  return layout;
}

const root = document.getElementById('root');
root.appendChild(App());












// import FetchMovies from './fetchMovies';
// import UI from './UI';

// /** declaracion de variables */
// const wrapperMovies = document.querySelector('.wrapper-movie');
// const btnNext = document.querySelector('.btn__pagination-next');
// const btnPrev = document.querySelector('.btn__pagination-prev');
// const form = document.querySelector('form');
// let query = document.querySelector('input')
// let page = 1;

// /** Evento para mostar la pagina siguiente */
// btnNext.addEventListener('click', () => {
//   page += 1;
//   if(page > 1) btnPrev.style.display = 'inline-block';
//   renderMovie(page)
// });

// /** Evento para mostrar la pagina anterior */
// btnPrev.addEventListener('click', () => {
//   page -= 1;
//   if(page === 1) btnPrev.style.display = 'none';
//   renderMovie(page);
// });

// /** evento para buscar peliculas por nombre */
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   if(!query.value) {
//     let alert = document.createElement('div')
//     alert.classList.add('text-danger', 'p-1', 'ml-2');
//     alert.textContent = 'El campo es obligatorio';
//     form.appendChild(alert);

//     setTimeout(() => {
//       alert.style.display = 'none';
//     }, 1000)
//     return;
//   };

//   renderMovie(page, query.value);
//   btnNext.remove();
//   btnPrev.remove();

//   query.value = '';
// });

// /** renderizar peliculas */
// async function renderMovie(page, query) {
//   const listMovies = new FetchMovies(page, query);
//   var movies = await listMovies.getMovie();

//   if(!query) {
//      movies = await listMovies.getMovies();
//   }
//   mapMovies(movies);
// }

// /** Congiguracion para mostrar listado peliculas */
// function mapMovies(movies) {
//   wrapperMovies.innerHTML = '';
//   movies.results.map(movie => {
//     const {id, title, popularity, poster_path } = movie;
//     /** Mostramnos todas las peliculas */
//     const showUI = new UI(id, title, popularity, poster_path);
//     let showDisplay = showUI.displayMovies();
//     wrapperMovies.innerHTML += showDisplay;
//   });

//   /** mostramos mas detalles de la pelicula obteniendo su id */
//   let info = document.querySelectorAll('.movie');
//   info.forEach(movie => {
//     movie.addEventListener('click', (e) => {
//       wrapperMovies.innerHTML = '';
//       renderMovieId(e.target.id);
//     });
//   });
// }

// /** renderizamos pelicula por su ID */
// async function renderMovieId(movie_id) {
//   const listMovies = new FetchMovies();
//   var movies = await listMovies.getMovieId(movie_id);
//   console.log(movies);
//   /** Mostramnos todas las peliculas */
//   const {id, title, homepage, poster_path, overview, genres, runtime } = movies;
//   let urlImg = 'https://image.tmdb.org/t/p/w300'+poster_path;

//   const showDisplay = `
//     <div class="col-lg-6 col-sm-12 col-md-12 my-4 text-center">
//       <img class="img__movie" src=${urlImg} />
//     </div>
//     <div class="col-lg-6 col-sm-12 col-md-12 text-center my-2 jumbotron">
//       <h2 class="text-uppercase text-center text-warning">${title}</h2>
//       ${genres.map((genre) => (`<small>${genre.name}</small>`)).join(' ')}
//       <i> -- ${runtime} min</i>
//       <hr class="my-4" />
//       <p class="my-4">${overview}</p>
//       <a href=${homepage}  class="btn btn-outline-secondary mt-4" rel="noreferrer noopener" role="button" target="_blank" >Home Page</a>
//     </div>
//   `
//   wrapperMovies.innerHTML += showDisplay;
//   btnNext.remove();
//   btnPrev.remove();
// }

// /*** Primer renderizado del listado de peliculas */
// renderMovie(page);
