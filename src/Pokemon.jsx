import data from './data/data.json'
import "./css/style.css"
import "./css/normalize.css"
import logo from "./assets/logo.svg.png"
import PokemonCard from './components/CardPokemon/CardPokemon';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import { useState } from 'react';

export function PokemonList () {
    const [pokedex, setPokedex] = useState([])
    return (
        <>
            <h1>
                <img src={logo} width={"50%"} height={"75%"} alt="logo" />
            </h1>
            <div className="lmj-layout-inner">
                <Sidebar pokedex={pokedex}/>
                <main> 
                    {data.map((pokemon,index) =>   
                        <PokemonCard pokemon={pokemon} key={index} pokedex={pokedex} setPokedex={setPokedex}/>
                    )}
                    
                </main>
            </div>
        </>
    );
}