import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div className='Navbar'>
        <img src='../../public/resources/Logo-transparent.png' alt='logo-transparent' />
        <ul>
            <li><NavLink exact to='/' >Accueil</NavLink></li>
            <li><NavLink exact to='/NosMaisonsForestieres' >Nos maisons forestières</NavLink></li>
            <li><NavLink exact to='/Services' >Nos services</NavLink></li>
            <li><NavLink exact to='/QuiSommesNous' >Qui sommes-nous ?</NavLink></li>
        </ul>
    </div>
    )
}

export default Navigation;