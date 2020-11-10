import React from 'react'
import Navigation from './Navigation';
import logo from '../img/logo.png'

function Header() {
    return (
        <header className="fixed topHeader">
            <div className="navCon mx-auto px-8 h-16 flex justify-between items-center">
                <span className="w-10">
                    <img src={logo} alt="Logo" />
                    </span>

                <Navigation />
            </div>
        </header>
    )
}

export default Header