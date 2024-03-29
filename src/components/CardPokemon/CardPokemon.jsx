import "./CardPokemon.scss"
import { useState } from "react"

export default function PokemonCard ({pokemon, pokedex, setPokedex}) {
    const [isOpen, setIsOpen] = useState(false)
    
    return ( 
        <article data-reverse={isOpen} onClick={() => {isOpen == false ? setIsOpen(true) : setIsOpen(false); console.log(isOpen);}}> 
            <div
                className="cardInner"
                style={{
                backgroundColor: getColorHexa(pokemon.apiTypes[0].name),
                borderColor: getColorHexa(pokemon.apiTypes[0].name),
                }}
            >
                {pokedex.includes(pokemon) ? 
                    <svg className="addedToPokedex" width="50%" style={{postion: 'absolute',top: '0', color: 'green', rotate: '-10deg'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" fill="currentColor"/></svg>
                 : <span className="addToPokedex" onClick={(event) => {event.stopPropagation(); setPokedex(pokedex = [...pokedex, pokemon])}}> + </span>}
                <figure className="cardFront">
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
                <div className="cardBack">
                    {/* <a href="#">Voir plus</a> */}

                </div>
            </div>
        </article>
    )
}

function getColorHexa (typeName) {
    switch (typeName) {
        case 'Eau':
            return 'blue';

        case 'Plante':
            return 'green';

        case 'Poison':
            return '#D850C2';

        case 'Vol':
            return '#738DDB';

        case 'Feu':
            return 'orange';

        case 'Insecte':
            return '#70B901';

        case 'Électrik':
            return '#FFD244';

        case 'Sol':
            return '#CD793F';

        case 'Fée':
            return 'pink';

        case 'Combat':
            return 'darkred';

        case 'Psy':
            return '#FD6960';

        case 'Acier':
            return '#246A79';

        case 'Glace':
            return '#67D1C8';

        case 'Roche':
            return '#CBB866';

        case 'Dragon':
            return '#1C6ABB';

        default:
            return 'grey';
    }
}