import "./CardPokemon.scss"

export default function PokemonCard ({pokemon}) {
    return ( 
        <article data-reverse="false" onClick={(event) => {event.currentTarget.dataset.reverse == "true" ? event.currentTarget.dataset.reverse = "false" : event.currentTarget.dataset.reverse = "true"; console.log(event.currentTarget.dataset.reverse);}} style={{borderColor: getColorHexa(pokemon.apiTypes[0].name), backgroundColor: getColorHexa(pokemon.apiTypes[0].name)}}> 
            <div
                className="cardInner"
                style={{
                backgroundColor: getColorHexa(pokemon.apiTypes[0].name),
                borderColor: getColorHexa(pokemon.apiTypes[0].name),
                }}
            >
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
                    <a href="#">Voir plus</a>
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