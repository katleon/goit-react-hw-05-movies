import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

import { fetchMovieReviews } from '../../../services/API';

const Reviews = () => {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(id).then(response => setReviews(response.results));
  }, [id]);

  return (
    <div>
      <ul className={css.reviewsList}>
        {reviews.length === 0 ? (
          <li>
            <h3>Sorry, we cannot find reviews for you</h3>
          </li>
        ) : (
          reviews.map(review => (
            <li className={css.reviewsItem} key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Reviews;
