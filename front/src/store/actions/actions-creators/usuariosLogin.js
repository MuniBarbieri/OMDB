import { USUARIOS_LOGIN } from "../constants";
import { USUARIOS_LOGOUT } from "../constants";
import axios from "axios";

const usuariosLogin = usuariosLoginData => ({
  type: USUARIOS_LOGIN,
  usuariosLoginData
});

const usuariosLogout = () => ({
  type: USUARIOS_LOGOUT
});

export const usuariosLoginProcess = usuario => dispatch =>
  axios
    .post(`/api/login`, usuario)
    .then(res => res.data)
    .then(usuarioLoginData => dispatch(usuariosLogin(usuarioLoginData)));

export const usuariosLogOutProcess = () => dispatch =>
  axios
    .get(`/api/logout`)
    .then(res => res.data)
    .then(() => dispatch(usuariosLogout()));

export const fetchUsers = () => dispatch =>
  axios
    .get("/api/users")
    .then(res => res.data)
    .then(users => {
      dispatch(receiveUsers(users));
    })
    .catch(err => {
      throw err;
    });
