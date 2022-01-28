import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected, dispatch } = useContext(UserContext);
  return (
    <Nav>
      <Link to="/">
        <Logo>
          <img
            src="../ressources/Logo-transparent.png"
            alt="Logo Ma maison des bois"
          />
        </Logo>
      </Link>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Burger>
      <Menu isOpen={isOpen}>
        <Link to="/nos-maisons-forestieres">
          <MenuLink>Nos maisons forestières</MenuLink>
        </Link>
        <Link to="/services">
          <MenuLink>Nos services</MenuLink>
        </Link>
        <Link to="/qui-sommes-nous">
          <MenuLink>Qui sommes-nous ?</MenuLink>
        </Link>

        <Link to="/se-connecter">
          {isConnected ? (
            
            <MenuLink
              as="button"
              onClick={() => dispatch({ type: "DISCONNECTION" })}
            >
              Deconnexion
            </MenuLink>
          ) : (
            <MenuLink>
              <Link to="/se-connecter">
                <Image>
                  <img
                    src="../ressources/user-white.png"
                    alt="utilisateur"
                    width="22px"
                    height="22px"
                  />
                </Image>
              </Link>
              Se connecter
            </MenuLink>
          )}
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
  background: #ba9b5c;

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
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: underline #ba9b5c;
  color: white;
  transition: all 0.3 ease-in;
  font-size: 1.2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
    text-transform: capitalize;

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
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: 0.3s ease-in;
  }
`;

const Logo = styled.div`
  img {
    width: 140px;
    height: 90px;
    padding: 5px;
  }
`;

const Image = styled.div`
  margin-right: 5px;
  margin-top: 5px;
`;

export default Navigation;
