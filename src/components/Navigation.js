import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'
import NavigationMenu from './NavigationMenu'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    const transitions = useTransition(showMenu, null, {
        from: { opacity: 0, left: '-10%' },
        enter: { opacity: 1, left: '0'},
        leave: { opacity: 0, left: '-10%' }
        })

    return (
        <nav>
            <div className="">
                <span className="mr-4 cursor-pointer text-xl"><FontAwesomeIcon className="faNavIcon" icon={faShoppingBag}/></span>
                <span onClick={() => setShowMenu(true)} className="text-xl cursor-pointer"><FontAwesomeIcon className="faNavIcon" icon={faBars}/></span>
            </div>

            { transitions.map(({ item, key, props }) =>
                item && <animated.div key={key} style={props} className="fixed top-0 left-0 h-screen w-full z-50 bg-no-repeat backgroundColor-primary navBck">
                    <div className="h-screen">
                    <span onClick={() => setShowMenu(false)} className="absolute text-4xl cursor-pointer nav-font right-0 mt-8 mr-8 text-3xl">X</span>

                    <NavigationMenu 
                        closeMenu={() => setShowMenu(false)}
                    />
                    </div>
                </animated.div>
            ) }
        </nav>
    )
}

export default Navigation