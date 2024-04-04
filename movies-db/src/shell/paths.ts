export const paths = {
  home: "/",
  about: "/about",
  movies: "/movies",
  /**
   * Returns route path by conditions
   * @example
   * // returns 'movies/:movieId'
   * paths.movieDetails();
   * @example
   * // returns 'movies/some-movie-id'
   * paths.movieDetails('some-movie-id');
   * @returns {String} Returns the link for route and navigation
   */
  movieDetails: (movieId?: string) => `/movies/${movieId ?? ":movieId"}`,
} as const;
