import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Navigation() {

    return (
        <Navbar>
            <Logo>
                <NavLink exact to='/'>
                    <img src='resources/Logo-fondBlanc.png' alt='logo-transparent' height='100%' width='auto' />
                </NavLink>
            </Logo>
            <Menu>
                <NavLink exact to='/NosMaisonsForestieres' >Nos maisons forestières</NavLink>
                <NavLink exact to='/Services' >Nos services</NavLink>
                <NavLink exact to='/QuiSommesNous' >Qui sommes-nous ?</NavLink>
                <Image>
                    <img src="resources/user-white.png" alt="user-pic" height='80%' width='auto' />
                    <p>Connexion</p>
                </Image>
            </Menu>
        </Navbar>
    );
}

const Navbar = styled.nav`
    display: flex;
    background: #5d7b4c;
    height: 7rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const Logo = styled.a`
    display: flex;
    align-items: center;
    height: 100%;
    width: auto;

    a {
        display: flex;
        height: 100%;
    }
`;

const Image = styled.a`
    display: flex;
    height: 70%;
    align-items: center;
    flex-direction: column;
`
const Menu = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    a {
        display: flex;
        list-style: none;
        text-decoration: none;
        color: white;
        padding: 1rem 2rem;
        font-family: 'Trebuchet MS';
        font-size: 1.2em;

        &:hover {
            color: #eeeb8f
        }
    }
`

export default Navigation;