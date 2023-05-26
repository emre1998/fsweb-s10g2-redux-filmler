import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions';
import movies from "../../data";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database"
}

export const movieReducer = (state=initialState, action) => {
  switch (action.type) {

    case ADD_MOVIE:
      return {
        ...state,
        movies:[...state.movies,action.payload],
      };

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => (action.payload !== item.id))
      }
    default:
      return state;
  }
}