const INITIAL_STATE = {
    movie: {},
  };
  export default function movieDetailsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "GET_MOVIE_DETAILS":
        return {
          ...state,
          movie: action.payload,
        };
  


      default:
        return state;
    }
  }