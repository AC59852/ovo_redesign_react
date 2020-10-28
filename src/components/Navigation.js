import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import NavBck from '../img/owl.png'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    let menu

    if(showMenu) {
        menu = <div className="fixed top-0 left-0 h-screen w-full z-50 bg-no-repeat backgroundColor-primary" style={{ backgroundImage: `url('${NavBck}')`, backgroundSize: `215%`, backgroundPosition: `28% 0`, backgroundColor: `#222222` }}>
                    <span onClick={() => setShowMenu(!showMenu)} className="absolute nav-font right-0 pt-2 pr-3 text-3xl">X</span>
                    <ul className="flex nav-font flex-col h-full justify-center text-white text-6xl tracking-wide">
                        <li className="pt-1 uppercase text-center"><h3>Home</h3></li>
                        <li className="pt-1 uppercase text-center"><h3>Shop</h3></li>
                        <li className="pt-1 uppercase text-center"><h3>Stores</h3></li>
                        <li className="pt-1 uppercase text-center"><h3>Contact</h3></li>
                    </ul>
               </div>
    }

    return (
        <nav>
            <span className="pr-4 text-xl"><FontAwesomeIcon icon={faShoppingBag}/></span>
            <span onClick={() => setShowMenu(!showMenu)} className="text-xl"><FontAwesomeIcon icon={faBars}/></span>

            { menu }
        </nav>
    )
}

export default Navigation