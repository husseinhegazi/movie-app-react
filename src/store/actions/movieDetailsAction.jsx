import axios from "axios";
export const getMovieDetails = (movieId) => (dispatch) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=4d2eadaa21670e503224c652f4256101`
    )
    .then((res) => {
      dispatch({
        type: "GET_MOVIE_DETAILS",
        payload: res.data,
      });
      if (res.data.poster_path === null)
        res.data.poster_path = "https://www.w3schools.com/howto/img_avatar.png";
      else {
        res.data.poster_path = `https://image.tmdb.org/t/p/w1280/${res.data.poster_path}`;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
