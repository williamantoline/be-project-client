import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyleProvider } from './styles/style-provider';
import "./index.css";
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <StyleProvider>
      <App />
    </StyleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);