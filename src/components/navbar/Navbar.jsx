import React from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <a href="/"><img className="logo" src={logo} alt="Zoo loo"/></a>
            <div className="navigation">
                <a className="navigation-link" href="">NOS ANIMAUX</a>
                <a className="navigation-link" href="/">À PROPOS</a>
                <a className="navigation-link" href="/">CONTACT</a>
            </div>
        </div> 
    )
}

export default Navbar;
