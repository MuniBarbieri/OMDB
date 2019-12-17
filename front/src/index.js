import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./store/store"; // cuando el archivo desde el que requiero se llama index, tenemos que importar no solo la carpeta, si no tambien el archivo //

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
