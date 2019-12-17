import { USUARIOS_LOGIN } from "../actions/constants";
import { USUARIOS_LOGOUT } from "../actions/constants";

const initialState = {
  usuariosLoginData: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USUARIOS_LOGIN:
      return Object.assign({}, state, {
        usuariosLoginData: action.usuariosLoginData
      });
    case USUARIOS_LOGOUT:
      return Object.assign({}, state, {
        usuariosLoginData: {}
      });

    default:
      return state;
  }
};
