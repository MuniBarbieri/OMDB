import { MOVIES_DATA } from "../actions/constants";

const initialState = {
  info: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_DATA:
      return Object.assign({}, state, { info: action.info });

    default:
      return state;
  }
};
