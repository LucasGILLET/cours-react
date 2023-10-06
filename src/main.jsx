import React from 'react'
import ReactDOM from 'react-dom/client'
import {PokemonList} from './pages/Pokemon.jsx'

import { Outlet } from "react-router-dom";
// import Navigation from "./components/Navigation";
import "./App.css";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <PokemonList />
//   </React.StrictMode>,
// )
export default function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}