import React from 'react'
import ReactDOM from 'react-dom/client'
// import {PokemonList} from './pages/Pokemon.jsx'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import Navigation from "./components/Navigation";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router/root.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);