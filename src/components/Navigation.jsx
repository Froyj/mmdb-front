import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/user";
import axios from "../helper/axios-config";

const Navigation = () => {
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

  return (
    <MenuContainer>
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
          {roleId === 1 && (
            <Link to="/admin/dashboard">
              <MenuLink>Admin</MenuLink>
            </Link>
          )}
          <ConnexionContainer>
            {isConnected ? (
              <MenuLink onClick={() => disconnectUser()}>Deconnexion</MenuLink>
            ) : (
              <Link to="/se-connecter">
                <MenuLink>
                  <Link to="/se-connecter">
                    <Image>
                      <img
                        src="../ressources/user-white.png"
                        alt="utilisateur"
                        width="20px"
                        height="20px"
                      />
                    </Image>
                  </Link>
                  Se connecter
                </MenuLink>
              </Link>
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
  box-shadow: 1px 1px 5px black;

  @media (max-width: 768px) {
    background: #ba9b5c;
  }
`;

const Nav = styled.nav`
  width: 100%;
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

const ConnexionContainer = styled.div`
  display: flex;
`;

const Image = styled.div`
  display: flex;
  flex-direction: row;
  /* margin-top: 5px; */
  margin-right: 5px;
`;

export default Navigation;
