import data from './data/data.json'
import "./css/style.css"
import "./css/normalize.css"

export function PokemonList () {
    const pokemons = data;
    const pokemonList = 
    <main> 
        {pokemons.map((pokemon,index) =>   
            <article key={index}>
            <figure>
                <picture>
                    <img src={pokemon.image} alt={"Image " + pokemon.name} />
                </picture>
                <figcaption>
                    <span className="types">{pokemon.apiTypes[0].name}</span>
                    <h2>{pokemon.name}</h2>
                    <ol>
                    <li>Points de vie : {pokemon.stats.HP}</li>
                    <li>Attaque : {pokemon.stats.attack}</li>
                    <li>Défense : {pokemon.stats.defense}</li>
                    <li>Attaque spécial : {pokemon.stats.special_attack}</li>
                    <li>Vitesse : {pokemon.stats.speed}</li>
                    </ol>
                </figcaption>
            </figure>
            </article>)} 
    </main>;


    return (
        <div>
        {pokemonList}
    </div>
    );
    }