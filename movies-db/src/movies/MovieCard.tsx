import { Link } from "react-router-dom";
import { Movie } from "../reducers/movies";
import { paths } from "../shell/paths";

type Props = {
  movie: Movie;
};


export const MovieCard = ({ movie }: Props) => {

  return (
    <div className="Movies-card">
      <Link to={paths.movieDetails(String(movie.id))}>
        {movie.title}
      </Link>
      <div className="Movies-card-overview">{movie.overview}</div>
      <div className="Movies-card-pop">{movie.popularity}</div>
    </div>
  )
};


