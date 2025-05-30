import App from './App';
import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
// import ReactDOM from "react-dom";

// // use createRoot
// ReactDOM.render(<App/>, document.getElementById("root"));

import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
