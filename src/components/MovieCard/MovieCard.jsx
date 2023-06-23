import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from '../MovieCard/MovieCard.module.css';

export const MovieCard = ({ movie, state }) => {
  return (
    <Link to={`/movies/${movie.id}`} state={state}>
      <div className={css.MovieCard}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
              : 'https://timescineplex.com/times/img/no-poster.png'
          }
          alt={movie.title}
          width="200"
          loading="lazy"
          className={css.cardImage}
        />
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
};
