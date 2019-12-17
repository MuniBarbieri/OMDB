import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/constants";

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return Object.assign({}, state, {
        list: [...state.list, action.favorite]
      });
    // case REMOVE_FAVORITE
    default:
      return state;
  }
};
