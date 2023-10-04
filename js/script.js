const selectElem = document.querySelector('select');
let main = document.querySelector('main');

// When a new <option> is selected
selectElem.addEventListener('change', () => {
  const index = selectElem.value;

  // On reset le main
  main.innerHTML = '';
  loadData(index);
});

// Init
loadData();
addFilterTypes();

async function loadData(idGeneration = 1, type = 'all') {
  // On peut utiliser le await sans être dans une fonction async si notre fichier JS est un module
  const reponse = await fetch(
    'https://pokebuildapi.fr/api/v1/pokemon/generation/' + idGeneration
  );
  const listPokemon = await reponse.json();

  let newListPokemon =
    type !== 'all'
      ? listPokemon.filter((pokemon) => pokemon.apiTypes[0].name === type)
      : listPokemon;

  for (const pokemon of newListPokemon) {
    let article = document.createElement('article');

    article.innerHTML = `
                <figure>
                <picture>
                    <img src="${pokemon.image}" alt="Image ${pokemon.name}" />
                </picture>
                <figcaption>
                    <span class="types">${pokemon.apiTypes[0].name}</span>
                    <h2>${pokemon.name}</h2>
                    <ol>
                    <li>Points de vie : ${pokemon.stats.HP}</li>
                    <li>Attaque : ${pokemon.stats.attack}</li>
                    <li>Défense : ${pokemon.stats.defense}</li>
                    <li>Attaque spécial : ${pokemon.stats.special_attack}</li>
                    <li>Vitesse : ${pokemon.stats.speed}</li>
                    </ol>
                </figcaption>
                </figure>`;

    let color;
    switch (pokemon.apiTypes[0].name) {
      case 'Eau':
        color = 'blue';
        break;

      case 'Plante':
        color = 'green';
        break;

      case 'Poison':
        color = '#D850C2';
        break;

      case 'Vol':
        color = '#738DDB';
        break;

      case 'Feu':
        color = 'orange';
        break;

      case 'Insecte':
        color = '#70B901';
        break;

      case 'Électrik':
        color = '#FFD244';
        break;

      case 'Sol':
        color = '#CD793F';
        break;

      case 'Fée':
        color = 'pink';
        break;

      case 'Combat':
        color = 'darkred';
        break;

      case 'Psy':
        color = '#FD6960';
        break;

      case 'Acier':
        color = '#246A79';
        break;

      case 'Glace':
        color = '#67D1C8';
        break;

      case 'Roche':
        color = '#CBB866';
        break;

      case 'Dragon':
        color = '#1C6ABB';
        break;

      default:
        color = 'grey';
        break;
    }

    article.style.borderColor = color;
    article.style.backgroundColor = color;

    main.appendChild(article);
  }
}

async function addFilterTypes() {
  let $types = document.querySelector('#types');

  const reponse = await fetch('https://pokebuildapi.fr/api/v1/types');
  const listTypes = await reponse.json();

  for (const type of listTypes) {
    let div = document.createElement('div');

    div.addEventListener('click', () => {
      main.innerHTML = '';
      loadData(selectElem.value, type.name);
    });

    div.innerHTML = `<img src="${type.image}" alt="${type.name}" title="${type.name}">`;
    $types.appendChild(div);
  }
}
