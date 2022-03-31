import { useContext } from "react";
import styled from "styled-components";
import LEGAL_NOTICE_URL from "../../constants/legal-notice";
import ModalContext from "../../contexts/modal";

function Footer() {
  const { setOpenModal } = useContext(ModalContext);

  return (
    <Navbar>
      <div className="content">
        <div className="logoList">
          <a
            href="https://www.facebook.com/Ma-Maison-des-Bois-100623835729596"
            target="_blank"
            rel="noreferrer"
          >
            <img src='/ressources/social-media-icons/facebook.webp' alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/ma_maison_des_bois/"
            target="_blank"
            rel="noreferrer"
          >
            <img src='/ressources/social-media-icons/instagram.webp' alt="instagram" />
          </a>
        </div>
        <ContactButton type="button" onClick={() => setOpenModal(true)}>
          Contact
        </ContactButton>
        <a href={LEGAL_NOTICE_URL}>
          {" "}
          Mentions légales{" "}
        </a>
        <p>
          Développé avec <img src='/ressources/social-media-icons/love.webp' alt="love" className="love" /> par des
          wilders de la{" "}
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
  padding: 1.8em;
  font-family: "Trebuchet MS";
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .logoList {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    img {
      padding: 0 2em;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;


    img {
      width: 40px;
      filter: invert(1);
    }

    .love {
      width: 1.2em;
      filter: invert(0);
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-evenly;
      
     
    }

    a:visited,
    a,
    a[download] {
      text-decoration: none;
      decoration: none;
      color: white;
    }
  }
`;

const ContactButton = styled.button`
  font-family: inherit;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;

  :hover {
    cursor: pointer;
  }
`;
export default Footer;
