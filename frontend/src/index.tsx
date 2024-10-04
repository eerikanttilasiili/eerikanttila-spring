import React from 'react'
import App from './App'
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { MovieContextProvider } from './MovieContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
  <Router>
      <MovieContextProvider>
          <App />
      </MovieContextProvider>
  </Router>
</StrictMode>
);