import axios from "axios";

export const searchMovie = (value) => (dispatch) => {
  return axios
    .get(
      value
        ? `https://api.themoviedb.org/3/search/movie?api_key=4d2eadaa21670e503224c652f4256101&query=${value}`
        : "https://api.themoviedb.org/3/movie/popular?api_key=4d2eadaa21670e503224c652f4256101"
    )
    .then((res) => {
      dispatch({
        type: "SEARCH_MOVIE",
        payload: res.data.results,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
