import { USUARIOS_REGISTRATION } from "../constants";
import axios from "axios";

const usuariosRegistration = usuarioData => ({
  type: USUARIOS_REGISTRATION,
  usuarioData
});

const usuariosRegistrationProcess = usuario =>
  axios
    .post(`/api/register`, usuario)
    .then(res => res.data)
    .then(usuarioData => console.log(usuarioData));

export default usuariosRegistrationProcess;
