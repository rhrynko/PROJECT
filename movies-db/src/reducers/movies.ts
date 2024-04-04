import { Action, Reducer } from "redux";

export type Movie = {
  id: number;
  title: string;
  popularity: number;
  overview: string;
};

type MoviesState = {
  top: Movie[];
};

const initialState: MoviesState = {
  top: [
    {
      id: 1,
      title: "The Shawshank Redemption",
      popularity: 0.99,
      overview: "Framed in the 1940s for the double",
    },
    {
      id: 2,
      title: "The Godfather",
      popularity: 0.98,
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the Corleone crime family",
    },
    {
      id: 3,
      title: "The Dark Knight",
      popularity: 0.97,
      overview: "Batman raises the stakes in his war on crime",
    },
  ],
};

const moviesReducer: Reducer<MoviesState, Action> = (state, action) => {
  return initialState;
};

export default moviesReducer;
