import data from './data/data.json'
import "./css/style.css"
import "./css/normalize.css"
import logo from "./assets/logo.svg.png"
import PokemonCard from './components/CardPokemon';

export function PokemonList () {
    return (
        <main> 
            <h1><img src={logo} width={"50%"} height={"75%"} alt="logo" /></h1>
            {data.map((pokemon,index) =>   
                <PokemonCard pokemon={pokemon} key={index}/>
            )}
        </main>
    );
}