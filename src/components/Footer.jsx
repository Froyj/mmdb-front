import styled from "styled-components";
import instaLogo from "../img/tl(2).webp";
import faceBookLogo from "../img/tl(37).webp";

;
function Footer() {
  return (
    <Navbar>
      <div className="content">
        <a href="https://www.facebook.com/Ma-Maison-des-Bois-100623835729596" target="_blank" rel="noreferrer" > <img src={faceBookLogo} alt="facebook" /></a>
        <a href="https://www.instagram.com/ma_maison_des_bois/" target="_blank" rel="noreferrer" > <img src={instaLogo} alt="instagram" /></a>
        <p> Contact </p>
        <a href="public/ressources/Copy of Charte.pdf" download="mentions_legales" > Mentions légales </a>
        <p>
          Développé avec ♥️ par des wilders de la{" "}
          <a href="https://www.wildcodeschool.com/fr-FR/campus/toulouse">
            Wild Code School
          </a>{" "}
        </p>
      </div>
    </Navbar>
  );
}

const Navbar = styled.nav`
  background: #5d7b4c;
  /* height: 5rem; */
  padding: 1.8em;
  font-family: "Trebuchet MS";
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* align-items: center; */

    img{
      width: 40px;
      filter: invert(1);
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-evenly;
    }

    a:visited, a, a[download] {
      text-decoration: none;
      decoration: none;
      color: white;
    }

  
  }
`;

export default Footer;
