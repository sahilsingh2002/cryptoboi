import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
const container = document.getElementById('root');
import store from "./redux/store";
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <BrowserRouter>
  <Provider store={store}>

<App/>
  </Provider>
  </BrowserRouter>
);