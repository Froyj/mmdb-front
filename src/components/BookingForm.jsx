import { useForm } from "react-hook-form";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import SubmitButton from "./styled-components/SubmitButton";
import FoodOption from "./FoodOption";

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
  
  useEffect(() => {
    axios
      .get("http://localhost:5500/options")
      .then((response) => {
        setMealOptions(response.data);
      });
    }, []);

  return (
    <Div>
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
              Voyageurs
            <br />
              <input
                type="number"
                {...register("travellersNumber")}
                min="1"
                max={house.capacity}
              /> 
            </label>
            <br />
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
          <SumUp><p>Prix X Nombre de nuits</p><br />
          <p>Frais de ménage 60 euros</p><br />
          <p>Taxe de séjour nombre de personnes X 2 euros</p><br />
          <p>Total</p><br /></SumUp>
        </PriceDetails>

        <SubmitButton marginTop="10px" marginBottom="10px">Réserver</SubmitButton>

      </Form>
    </Div>
  );
}

const Div = styled.div`
margin-bottom: 30px;
`

const Form = styled.div`
  border: 2px solid #1c2c46;
  background-color: white;
  border-radius: 15px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: auto;
  color: #1c2c46;

  h1 {
    text-align: center;
    padding: 20px 20px;
  }
`;

const QuickBooking = styled.div`
  border: 2px solid #ba9b5c;
  width: 95%;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 10px;
`;

const SelectBookingDates = styled.div`
display: flex;
flex-direction: row;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SelectTravellersNumber = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-radius: 5px;
@media (max-width: 768px) {
  flex-wrap: wrap;
  }
`;

const OptionChoice = styled.div`
border: 2px solid #ba9b5c;
border-radius: 5px;
width: 95%;
margin: auto;
margin-top: 10px;
li {
  line-height: 40px;
}
 `;

const Options = styled.h3`
text-align: center;
`;

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

const SumUp = styled.p`
margin-top: 10px;
`;

const PriceDetails = styled.div`
border: 2px solid #ba9b5c;
border-radius: 5px;
width: 95%;
margin: auto;
margin-top: 10px;
`;

export default BookingForm;
