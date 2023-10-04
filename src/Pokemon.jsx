import data from './data/data.json'
import "./css/style.css"
import "./css/normalize.css"
import logo from "./assets/logo.svg.png"


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

export function PokemonList () {
    const pokemons = data;
    // here is *my way* to do it
    // for (const pokemon of pokemons) {
    //     switch (pokemon.apiTypes[0].name) {
    //         case 'Eau':
    //             pokemon.apiTypes[0].color = 'blue';
    //             break;

    //         case 'Plante':
    //             pokemon.apiTypes[0].color = 'green';
    //             break;

    //         case 'Poison':
    //             pokemon.apiTypes[0].color = '#D850C2';
    //             break;

    //         case 'Vol':
    //             pokemon.apiTypes[0].color = '#738DDB';
    //             break;

    //         case 'Feu':
    //             pokemon.apiTypes[0].color = 'orange';
    //             break;

    //         case 'Insecte':
    //             pokemon.apiTypes[0].color = '#70B901';
    //             break;

    //         case 'Électrik':
    //             pokemon.apiTypes[0].color = '#FFD244';
    //             break;

    //         case 'Sol':
    //             pokemon.apiTypes[0].color = '#CD793F';
    //             break;

    //         case 'Fée':
    //             pokemon.apiTypes[0].color = 'pink';
    //             break;

    //         case 'Combat':
    //             pokemon.apiTypes[0].color = 'darkred';
    //             break;

    //         case 'Psy':
    //             pokemon.apiTypes[0].color = '#FD6960';
    //             break;

    //         case 'Acier':
    //             pokemon.apiTypes[0].color = '#246A79';
    //             break;

    //         case 'Glace':
    //             pokemon.apiTypes[0].color = '#67D1C8';
    //             break;

    //         case 'Roche':
    //             pokemon.apiTypes[0].color = '#CBB866';
    //             break;

    //         case 'Dragon':
    //             pokemon.apiTypes[0].color = '#1C6ABB';
    //             break;

    //         default:
    //             pokemon.apiTypes[0].color = 'grey';
    //             break;
    //     }
    // }
    const pokemonList = 
    <main> 
        <h1><img src={logo} width={"50%"} height={"75%"} alt="logo" /></h1>
        {pokemons.map((pokemon,index) =>   
            <article key={index} style={{borderColor: getColorHexa(pokemon.apiTypes[0].name), backgroundColor: getColorHexa(pokemon.apiTypes[0].name)}}> 
            {/* <article key={index} style={{borderColor: pokemon.apiTypes[0].color, backgroundColor: pokemon.apiTypes[0].color}}>  =>>>> *my way* */}
                
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