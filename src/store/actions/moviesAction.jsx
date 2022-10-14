import axios from "axios";

export const getMovies = (pageNo) => (dispatch) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4d2eadaa21670e503224c652f4256101&page=${pageNo}`
    )
    .then((res) => {
      dispatch({
        type: "GET_MOVIES",
        payload: res.data.results,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
