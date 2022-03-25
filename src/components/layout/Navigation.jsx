import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/user';
import axios from '../../helper/axios-config';
import StyledLink from '../common/Link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected, dispatch, roleId } = useContext(UserContext);
  const navigate = useNavigate();

  const disconnectUser = () => {
    axios
      .get('/auth/revoke-access')
      .then(() => dispatch({ type: 'DISCONNECTION' }))
      .then(() => navigate('/'))
      .catch(console.log);
  };

  return (
    <MenuContainer id='menu-container'>
      <Nav>
        <StyledLink to='/'>
          <Logo>
            <img
              src='/ressources/Logo-blanc.png'
              alt='Logo Ma maison des bois'
            />
          </Logo>
        </StyledLink>

        <Burger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Burger>

        <Menu isOpen={isOpen}>
          <MenuItem id='link1'>
            <StyledLink to='/nos-maisons-forestieres'>
              Nos maisons forestières
            </StyledLink>
          </MenuItem>
          <MenuItem id='link2'>
            <StyledLink to='/services'>Nos services</StyledLink>
          </MenuItem>
          <MenuItem id='link3'>
            <StyledLink to='/qui-sommes-nous'>Qui sommes-nous ?</StyledLink>
          </MenuItem>
          {roleId === 2 && (
            <MenuItem id='link4'>
              <StyledLink to='/profil'>Profil</StyledLink>
            </MenuItem>
          )}
          {roleId === 1 && (
            <MenuItem id='link5'>
              <StyledLink to='/admin/dashboard'>Admin</StyledLink>
            </MenuItem>
          )}
          <ConnexionContainer>
            {isConnected ? (
              <MenuItem id='link6' onClick={() => disconnectUser()}>
                Deconnexion
              </MenuItem>
            ) : (
              <StyledLink to='/se-connecter'>
                <MenuItem id='link4'>
                  <StyledLink to='/se-connecter'>
                    <Image>
                      <img
                        src='/ressources/user-white.png'
                        alt='utilisateur'
                        width='20px'
                        height='20px'
                      />
                    </Image>
                  </StyledLink>
                  Se connecter
                </MenuItem>
              </StyledLink>
            )}
          </ConnexionContainer>
        </Menu>
      </Nav>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  background-color: #5d7b4c;
  display: flex;
  flex-direction: row;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 2;
  box-shadow: none;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;

  @media (max-width: 1170px) {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  padding: 1vh 1vw;
  img {
    width: 140px;
    height: 90px;
  }
  @media (max-width: 768px) {
    img {
      width: 90px;
      height: auto;
    }
  }
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  padding: 1em 2em;
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
    justify-content: center;
  }
`;

const Menu = styled.ul`
  background-color: #5d7b4c;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.125em;
  flex-wrap: wrap;
  flex-shrink: 2;
  ${StyledLink} {
    color: white;
  }
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-basis: 100%;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: 0.3s ease-in;
  }
  @media (max-width: 1170px) {
    font-size: 1em;
  }
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 1rem 1rem;
  cursor: pointer;
  color: white;
  font-weight: bold;
  margin-right: 1.25em;
  transition: all 0.3 ease-in;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  text-transform: capitalize;

  &:hover {
    color: #eeeb8f;
  }

  #link5 {
    color: white;
  }

  @media (max-width: 768px) {
    color: white;
  }
`;

const ConnexionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.div`
  margin-top: 5px;
  margin-right: 5px;
`;

export default Navigation;
