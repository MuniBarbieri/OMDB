import { SEARCH_MOVIES } from "../actions/constants";

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return Object.assign({}, state, { list: action.movies });
    default:
      return state;
  }
};
