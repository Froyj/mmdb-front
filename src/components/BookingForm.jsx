import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

import Modal from 'react-modal';
import FilledButton from "./styled-components/FilledButton";
import FoodOption from "./FoodOption";
import colors from "./styled-components/colors";

function BookingForm({ house }) {
  BookingForm.propTypes = {
    house: PropTypes.string.isRequired,
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const [mealOptions, setMealOptions] = useState([]);
  const [ show, setShow ] = useState("true");
  const [openModal, setOpenModal] = useState(false);
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/options`)
      .then((response) => {
        setMealOptions(response.data);
      });
    }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        
        <h1>Réservez votre maison</h1>
        
        <QuickBooking>
          <SelectBookingDates>
            <label htmlFor="arrival">
              Arrivée
              <br />
              <input type="date" {...register("arrival")} />
            </label>
            <label htmlFor="departure">
              Départ
              <br />
              <input type="date" {...register("departure")} />
            </label>
          </SelectBookingDates>
          <SelectTravellersNumber>
            <label htmlFor="travellersNumber">
              <p> Nombre de voyageurs </p>
              <input
                type="number"
                {...register("travellersNumber")}
                min="1"
                max={house.capacity}
              /> 
            </label>
          </SelectTravellersNumber>
        </QuickBooking>
        
        <OptionChoice>
        <Options>Choix des options</Options>
        <TitleOption onClick={() =>setShow(!show)}><li>La carte</li></TitleOption>
        {show ? null : mealOptions
        .map((repas) => <FoodOption key={repas.id} repas={repas} />)}
        </OptionChoice>
        
        <PriceDetails>
          <SumUpTitle>Résumé de votre réservation</SumUpTitle>
          <SumUp>
            <p>Prix x Nombre de nuits</p>
            <p>Frais de ménage (60,00€)</p>
            <p>Taxe de séjour (2,00€) x Nombre de voyageurs</p>
          </SumUp>
          <SumUpTotal>Total</SumUpTotal>
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
          Réserver
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
          <ModalConnect to='/se-connecter'> Me connecter </ModalConnect>

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
margin-top: 3rem;
margin-left: 3rem;
width: 33%;

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
  /* border: 2px solid #1c2c46; */
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
`;

const QuickBooking = styled.div`
  border: 3px solid white;
  width: 95%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
`;

const SelectBookingDates = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-size: 1.2rem;

label {
  width: 45%;
  text-align: center;
  padding: .5rem
}

input {
  width: 90%;
  height: 1.5rem;
  border-radius: 10px;
  border: none;
  text-align: center;
  font-size: .9rem
}

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    
    label {
      display: flex;
      flex-direction: row;
      font-size: 1rem;
      width: 80%
    }

    input {
      margin: 0 1rem
    }
    
  }
`;

const SelectTravellersNumber = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  width: 100%;

  label {
    display: flex;
    flex-direction: row;
    margin: .5rem 0;

    p{
      padding: 0 1rem;
      font-size: 1.2rem;
      color: white
    }

    input {
      width: 15%;
      height: 1.3rem;
      border-radius: 10px;
      padding: 0 .6rem
    }
  }

  @media (max-width: 768px) {
    label {
      p {
        font-size: 1rem;
        padding: 0
      }
    }

    input {
      margin: 0 1rem
    }
  }
`

const OptionChoice = styled.div`
background-color: white;
border-radius: 10px;
padding: 1rem;
width: 89%;
margin: auto;
margin-top: 1.5rem;

li {
  line-height: 40px;
}
 `

const Options = styled.h3`
text-align: center;
`

const TitleOption = styled.h2`
  margin-top: 1rem;
  width: auto;
  list-style: none;
  cursor: pointer;
  
  &:hover {
    color: #ba9b5c;
  }
`;

const SumUpTitle = styled.h3`
text-align: center;
`;

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
const SumUpTotal = styled.h3`
  width: 90%;
  margin: 1rem;
  padding-top: 1rem;
  border-top: dotted ${colors.blue} 3px;
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
const ModalConnect = styled(Link)`
  text-decoration: none;
  font-style: italic;
  color: ${colors.blue};

  :hover {
    text-decoration: underline
  }
`