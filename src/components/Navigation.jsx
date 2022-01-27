import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { UserContext } from '../contexts/user';
import axios from '../helper/axios-config';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected, dispatch } = useContext(UserContext);

  const revokeAccess = () => {
    axios.get('/auth/revoke-access').catch(console.log);
  };

  return (
    <Nav>
      <Link to='/'>
        <Logo>
          <img
            src='../ressources/Logo-fondBlanc.png'
            alt='Logo Ma maison des bois'
          />
        </Logo>
      </Link>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Burger>
      <Menu isOpen={isOpen}>
        <Link to='/NosMaisonsForestieres'>
          <MenuLink>Nos maisons forestières</MenuLink>
        </Link>
        <Link to='/Services'>
          <MenuLink>Nos services</MenuLink>
        </Link>
        <Link to='/QuiSommesNous'>
          <MenuLink>Qui sommes nous ?</MenuLink>
        </Link>
        <ConnexionContainer>
          <Link to='/SeConnecter'>
            <Image>
              <img
                src='../ressources/user-white.png'
                alt='utilisateur'
                width='35px'
                height='35px'
              />
            </Image>
          </Link>
          {isConnected ? (
            <MenuLink
              as='button'
              onClick={() => {
                revokeAccess();
                dispatch({ type: 'DISCONNECTION' });
              }}
            >
              Deconnexion
            </MenuLink>
          ) : (
            <Link to='/SeConnecter'>
              <MenuLink>Se connecter</MenuLink>
            </Link>
          )}
        </ConnexionContainer>
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

  @media (max-width: 1170px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
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

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLink = styled.div`
  padding: 1rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: underline #5d7b4c;
  color: white;
  transition: all 0.3 ease-in;
  font-size: 1.5rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;

  &:hover {
    color: #eeeb8f;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
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

const ConnexionContainer = styled.div`
  display: flex;
`;

const Image = styled.a`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;
export default Navigation;
