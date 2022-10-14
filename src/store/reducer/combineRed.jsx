import { combineReducers } from "redux";
import movieDetailsReducer from "./movieDetailsRed";
import moviesReducer from "./movieReducer";
import moviesSearchReducer from "./movieSearchRed";
export default combineReducers({
  movie: movieDetailsReducer,
  movies: moviesReducer,
  moviesSearch: moviesSearchReducer,
});
