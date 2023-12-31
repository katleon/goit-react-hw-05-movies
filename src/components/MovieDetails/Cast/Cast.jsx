import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../../services/API';

import css from '../Cast/Cast.module.css';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(id).then(response => setCast(response.cast));
  }, [id]);

  return (
    <div>
      <ul className={css.castList}>
        {cast &&
          cast.map(actor => (
            <li className={css.castItem} key={actor.id}>
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : 'https://timescineplex.com/times/img/no-poster.png'
                }
                alt="poster"
                width="100"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
