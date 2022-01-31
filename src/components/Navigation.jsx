import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";
import axios from "../helper/axios-config";
import StyledLink from "./styled-components/Link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const disconnectUser = () => {
    axios
      .get("/auth/revoke-access")
      .then(() => dispatch({ type: "DISCONNECTION" }))
      .then(() => navigate("/"))
      .catch(console.log);
  };

  return (
    <MenuContainer>
      <Nav>
        <StyledLink to="/">
          <Logo>
            <img
              src="../ressources/Logo-transparent.png"
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
            <MenuLink>Nos maisons forestières</MenuLink>
          </StyledLink>
          <StyledLink to="/services">
            <MenuLink>Nos services</MenuLink>
          </StyledLink>
          <StyledLink to="/qui-sommes-nous">
            <MenuLink>Qui sommes-nous ?</MenuLink>
          </StyledLink>

          <ConnexionContainer>
            {isConnected ? (
              <MenuLink onClick={() => disconnectUser()}>Deconnexion</MenuLink>
            ) : (
              <StyledLink to="/se-connecter">
                <MenuLink>
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
  background: #ba9b5c;
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;
  /* z-index: 1; */
`;

const Nav = styled.nav`
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
  transition: all 0.3 ease-in;
  font-size: 1.2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-transform: capitalize;

  &:hover {
    color: #eeeb8f;
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
