import './styles.scss';
import UI from '../../libs/UI';
import FetchMovies from '../../libs/fetchMovies';

export function PopularMovies() {
  const wrapper = document.createElement('main');
  const div = document.createElement('div');
  wrapper.classList.add('container', 'list-movies');
  div.classList.add('row');
  const fetchMovies = new FetchMovies();
  (async () => {
    const movies = await fetchMovies.getMovies();
  
    movies.results.map(movie => {
      const { id, title, popularity, poster_path } = movie;
      const showUI = new UI(id, title, popularity, poster_path);
      let showDisplay = showUI.displayMovies();
      div.innerHTML += showDisplay;
    });
  })();

  wrapper.appendChild(div);
  return wrapper; 
}