import { connect } from "react-redux";
import { Movie } from "../reducers/movies";
import { RootState } from "../store";
import { MovieCard } from "./MovieCard";

import styles from './Movies.module.scss';

type Props = {
  movies: Movie[];
};

const Movies = ({ movies }: Props) => {
  return (
    <section>
      <div className={styles.list}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  )
};

const mapStateToProps = (state: RootState) => ({
  movies: state.movies.top,
})

const connector = connect(mapStateToProps)

export default connector(Movies);
