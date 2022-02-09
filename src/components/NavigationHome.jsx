import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";
import axios from "../helper/axios-config";
import StyledLink from "./styled-components/Link";

const NavigationHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected, dispatch, roleId } = useContext(UserContext);
  const navigate = useNavigate();

  const disconnectUser = () => {
    axios
      .get("/auth/revoke-access")
      .then(() => dispatch({ type: "DISCONNECTION" }))
      .then(() => navigate("/"))
      .catch(console.log);
  };
  const menuContainer = document.getElementById("menu-container");

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (window.matchMedia("(min-width: 768px)").matches) {
      if (scroll > 400) {
        menuContainer.style.background = "#5d7b4c";
        menuContainer.style.transition = "0.3s";
        menuContainer.style.boxShadow = "1px 1px 5px black";
      } else {
        menuContainer.style.background = "transparent";
        menuContainer.style.transition = "0.3s";
        menuContainer.style.boxShadow = "none";
      }
    }
  });

  return (
    <MenuContainer id="menu-container">
      <Nav>
        <StyledLink to="/">
          <Logo>
            <img
              src="../ressources/Logo-blanc.png"
              alt="Logo Ma maison des bois"
            />
          </Logo>
        </StyledLink>

        <Burger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Burger>

        <Menu isOpen={isOpen}>
          <StyledLink to="/nos-maisons-forestieres">
            <MenuLink id="link1">Nos maisons forestières</MenuLink>
          </StyledLink>
          <StyledLink to="/services">
            <MenuLink id="link2">Nos services</MenuLink>
          </StyledLink>
          <StyledLink to="/qui-sommes-nous">
            <MenuLink id="link3">Qui sommes-nous ?</MenuLink>
          </StyledLink>
          {roleId === 1 && (
            <StyledLink to="/admin/dashboard">
              <MenuLink id="link5">Admin</MenuLink>
            </StyledLink>
          )}
          <ConnexionContainer>
            {isConnected ? (
              <MenuLink id="link6" onClick={() => disconnectUser()}>
                Deconnexion
              </MenuLink>
            ) : (
              <StyledLink to="/se-connecter">
                <MenuLink id="link4">
                  <StyledLink to="/se-connecter">
                    <Image>
                      <img
                        src="../ressources/user-white.png"
                        alt="utilisateur"
                        width="20px"
                        height="20px"
                      />
                    </Image>
                  </StyledLink>
                  Se connecter
                </MenuLink>
              </StyledLink>
            )}
          </ConnexionContainer>
        </Menu>
      </Nav>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  background: transparent;
  display: flex;
  flex-direction: row;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1;
  box-shadow: none;

  @media (max-width: 768px) {
    background: #5d7b4c;
  }
`;

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1170px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const Logo = styled.div`
 
  display: flex;
  justify-content: center;
  img {
    width: 140px;
    height: 90px;
    padding: 5px;
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
    justify-content: center;
    margin-right: 5%;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: 0.3s ease-in;
  }
`;

const MenuLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  padding: 1rem 1rem;
  cursor: pointer;
  color: white;
  font-weight: bold;
  margin-right: 20px;

  transition: all 0.3 ease-in;
  font-size: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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

export default NavigationHome;
