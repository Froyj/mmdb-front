import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Link to="/">
        <Logo>
          <img src="../ressources/Logo-fondBlanc.png" alt="Logo Ma maison des bois" />
        </Logo>
      </Link>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Burger>
      <Menu isOpen={isOpen}>
        <Link to="/NosMaisonsForestieres">
          <MenuLink>Nos maisons forestières</MenuLink>
        </Link>
        <Link to="/Services">
          <MenuLink>Nos services</MenuLink>
        </Link>
        <Link to="/QuiSommesNous">
          <MenuLink>Qui sommes nous ?</MenuLink>
        </Link>
        <Link to="/SeConnecter">
          <MenuLink>Se connecter</MenuLink>
        </Link>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #5d7b4c;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  
  @media (max-width: 1271px) {
    display: flex;
  }
`;

const MenuLink = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: underline #5d7b4c;
  color: white;
  transition: all 0.3 ease-in;
  font-size: 1.5rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  &:hover {
    color: #eeeb8f;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  @media (max-width: 1271px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: 0.3s ease-in;
  }
`;

const Logo = styled.a`
  width: 25%;
  img {
    width: 200px;
    padding: 10px;
  }
`;

export default Navigation;