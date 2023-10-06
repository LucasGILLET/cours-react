import './Sidebar.scss'
import { useState } from 'react'

function Sidebar({pokedex, setPokedex}) {
    const [isOpen, setIsOpen] = useState(false)
    
    // function removePeople(pokemon) {
    //   var array = [...pokedex]; // make a separate copy of the array
    //   var index = array.indexOf(pokemon)
    //   if (index !== -1) {
    //     array.splice(index, 1);
    //     console.log(array, pokedex, pokemon);
    //     // setPokedex(array);
    //   }
    // }
  
    return isOpen == true ? (

      <div className="lmj-cart">
        <button className="lmj-cart-toggle-button" onClick={() => {setIsOpen(false); console.log(isOpen);}}>
          X
        </button>
        <h2>
          {/* <img src={} alt="" /> */}
          <p>Pokédex ({pokedex.length})</p>
        </h2>
        {pokedex.length > 0  ? 
        <ul>
          {pokedex.map((pokemon, index) => 
            <li style={{cursor: "pointer"}} key={index} onClick={() => {
              let newPokedex = [...pokedex]; 
              let index = newPokedex.indexOf(pokemon); 
              if (index !== -1) {
                newPokedex.splice(index, 1); 
                setPokedex(newPokedex);
              }
            }}>
              {pokemon.name}
            </li>
          )}
        </ul> 
        
        : <div>Votre Pokédex est vide</div> } 
        
        
        
      </div>

    ) : (

      <div className="lmj-cart-closed">
        <button className="lmj-cart-toggle-button" onClick={() => {setIsOpen(true); console.log(isOpen);}}>
          {/* <img src={pokeball} alt="" /> */}
          <p>Pokédex ({pokedex.length})</p>
        </button>
      </div>
    )
  }


  
  export default Sidebar
  