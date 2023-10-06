/* ICI TOUS LES IMPORTS */
import './Sidebar.scss'
import { useState } from 'react'

function Sidebar() {
    /* Création du useState isOpen qui sera initialiser à false */
    const [isOpen, setIsOpen] = useState(false)
  
    return isOpen == true ? (

      <div className="lmj-cart">
        <button className="lmj-cart-toggle-button" onClick={() => {setIsOpen(false); console.log(isOpen);}}>
          X
        </button>
        <h2>
          {/* <img src={} alt="" /> */}
          <p>Pokédex</p>
        </h2>
        <div>Votre Pokédex est vide</div>
      </div>

    ) : (

      <div className="lmj-cart-closed">
        <button className="lmj-cart-toggle-button" onClick={() => {setIsOpen(true); console.log(isOpen);}}>
          {/* <img src={pokeball} alt="" /> */}
          <p>Pokédex</p>
        </button>
      </div>
    )
  }
  
  export default Sidebar
  