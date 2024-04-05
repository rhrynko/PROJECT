import { Link } from "react-router-dom";
import { Movie } from "../reducers/movies";
import { paths } from "../shell/paths";

import styles from './MovieCard.module.scss';

type Props = {
  movie: Movie;
};


export const MovieCard = ({ movie }: Props) => {

  return (
    <div className={styles.card}>
      <img className={styles.thumbnail} src="/movie-thumb.png" alt="movie thumbnail" />
      <div className={styles.content}>
        <Link to={paths.movieDetails(String(movie.id))}>
          {movie.title}
        </Link>
        <div className={styles.overview}>{movie.overview}</div>
        <div className={styles.popularity}>{movie.popularity}</div>
      </div>
    </div>
  )
};


