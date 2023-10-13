import "../css/style.css"
import "../css/normalize.css"
import logo from "../assets/logo.svg.png"
import PokemonCard from '../components/CardPokemon/CardPokemon';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import { useState, useEffect } from 'react';

export default function PokemonList () {
    const [pokedex, setPokedex] = useState([])
    const [dataPokemon, setDataPokemon] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(`Le Pokédex possède ${pokedex.length} pokémons`);
    })

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setDataPokemon(data);
            setLoading(true); /* On modifie la valeur à la fin du fetch */
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

    return (
        <>
            <h1>
                <img src={logo} width={"50%"} height={"75%"} alt="logo" />
            </h1>
            <div className="lmj-layout-inner">
                <Sidebar pokedex={pokedex} setPokedex={setPokedex}/>
                <main> 
                    { loading ? (
                        dataPokemon.map((pokemon,index) =>   
                            <PokemonCard pokemon={pokemon} key={index} pokedex={pokedex} setPokedex={setPokedex}/>
                        )
                    ) : (
                        // <p style={{textAlign: "center", width: "100%", color: "white"}}>Chargement des données...</p>
                        <div className="loader"></div>
                    )
                }
                </main>
            </div>
        </>
    );
}