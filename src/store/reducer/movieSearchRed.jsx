const INITIAL_STATE = {
  moviesSearch: [],
};

export default function moviesSearchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEARCH_MOVIE":
      return {
        ...state,
        moviesSearch: action.payload,
      };
    default:
      return state;
  }
}
