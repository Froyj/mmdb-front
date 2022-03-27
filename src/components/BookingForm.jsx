import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import Modal from 'react-modal';
import FilledButton from "./common/buttons/FilledButton";
import colors from "./styled-components/theme/colors";

// eslint-disable-next-line react/prop-types
function BookingForm() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Form >
        <h1>Tarifs</h1>
                
        <PriceDetails>
          <SumUp>
            <Price>
                280€ /nuit
            </Price>
            <p>Frais de ménage (60,00€)</p>
            <p>Taxe de séjour (2,00€) par personne et par jour</p>
          </SumUp>
        </PriceDetails>

        <FilledButton
          type='button'
          onClick={() => setOpenModal(!openModal)}
          margin="1.5rem 0"
          width="95%"
          alignSelf="center"
          fontSize="1rem"
          cursor="pointer"
          border="#fff solid 3px"
        >
          En savoir plus
        </FilledButton>
      </Form>

      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            opacity: "1",
            borderRadius: "15px"
          }
        }}
      >
        <ModalContainer>
          <ModalTitle> Intéressé.e par cette location ? </ModalTitle>
          <ModalContact> Malheureusement, la réservation en ligne n'est pas encore disponible. </ModalContact>
          <ModalText> Créez un compte pour être recontacté par l'équipe de Ma Maison des Bois</ModalText>
          <FilledButton
            width="40%"
            alignSelf="center"
            backgroundColor="transparent"
            border={`${colors.blue} solid 3px`}
            fontSize="1rem"
          > 
            <ModalCreate to='/creation-compte'> Créer un compte </ModalCreate>
          </FilledButton>

          <button
            className='close'
            type='button'
            onClick={() => setOpenModal(false)}
          > 
            Fermer 
          </button>
          <ModalSmall> Ma maison des bois - 06 20 90 78 27 - <a href='mailto:mamaisondesbois@gmail.com'> e-mail </a></ModalSmall>
        </ModalContainer>
      </Modal>

    </Container>
  );
}

const Container = styled.div`
width: auto;

@media screen and (max-width: 768px) {
  width: 95%;
  align-self: center;
  margin: 0;

  h1 {
    font-size: 1.3rem
  }
}
`

const Form = styled.div`
  background-color: ${colors.green};
  padding: 1rem;
  border-radius: 15px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: auto;
  color: #1c2c46;
  box-shadow: 10px 10px 20px;

  h1 {
    text-align: center;
    padding: 20px 20px;
    color: white
  }
`

const SumUp = styled.div`
  width: 100%;
  margin: 1.5rem 1rem;

  p {
    margin: .8rem 0
  }

  @media screen and (max-width: 768px) {
    width: 90%
  }
`

const PriceDetails = styled.div`
width: 95%;
background-color: white;
border-radius: 10px;
padding: 1rem;
width: 89%;
margin: auto;
margin-top: 1.5rem;
`

export default BookingForm;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Trebuchet MS';
  display: "flex";
  flex-direction: "column";
  justify-self: center;
  align-items: center;
  padding: 1rem 2rem;

  .close {
    border: none;
    background: none;
    margin-top: 2rem;
    margin-bottom: 1rem;
    cursor: pointer;

    :hover {
      text-decoration: underline
    }
  }
`
const ModalTitle = styled.h1`
  color: ${colors.green};
  margin-bottom: 2rem;
`
const ModalContact = styled.p`
  font-size: 1.1rem;
  font-weight: 100;
  letter-spacing: .06em;
`
const ModalText = styled.p`
  font-size: 1.1rem;
  font-weight: lighter;
  letter-spacing: .06em;
  margin-bottom: 1rem;
  text-align: center;
`
const ModalSmall = styled.p`
  font-size: 0.8rem;
  font-style: italic;
  color: grey;

  a {
    color: grey
  }
`
const ModalCreate = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.blue};

  :hover {
    color: ${colors.green}
  }
`

const Price = styled.h3`
  text-align: left;
  margin-bottom: 2rem;
`