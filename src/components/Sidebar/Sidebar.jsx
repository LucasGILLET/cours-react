import './Sidebar.scss'
import { useState } from 'react'

function Sidebar({pokedex}) {
    const [isOpen, setIsOpen] = useState(false)
  
    return isOpen == true ? (

      <div className="lmj-cart">
        <button className="lmj-cart-toggle-button" onClick={() => {setIsOpen(false); console.log(isOpen);}}>
          X
        </button>
        <h2>
          {/* <img src={} alt="" /> */}
          <p>Pokédex ({pokedex.length})</p>
        </h2>
        {pokedex.length > 0  ? <ul>{pokedex.map((pokemon, index) => <li key={index}>{pokemon.name}</li>)}</ul> : <div>Votre Pokédex est vide</div> } 
        
        
        
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
  