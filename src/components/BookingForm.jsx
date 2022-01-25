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
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        
        <h1>Réservez votre maison</h1>
        
        <QuickBooking>
          <SelectBookingDates>
            <label htmlFor="arrival">
              Arrivée
              <br />
              <input type="date" {...register("arrival")} />
            </label>
            <br />
            <label htmlFor="departure">
              Départ
              <br />
              <input type="date" {...register("departure")} />
            </label>
            <br />
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
          Nombre de nuits X prix =<br />
          Frais de ménage : 60 euros
          <br />
          Taxe de séjour : Nombre de personnes X 2 euros =<br />
          Total :<br />
        </PriceDetails>

        <SubmitButton>Réserver</SubmitButton>

      </Form>
    </div>
  );
}

const Form = styled.div`
  border: 2px solid #1c2c46;
  border-radius: 15px;
  width: auto;
  height: auto;
  background-color: #F3F9F3;
  display: flex;
  flex-direction: column;
  align-content: space-around;

  h1 {
    text-align: center;
    padding: 20px 20px;
  }
`;

const QuickBooking = styled.div`
  border: 2px solid #1c2c46;
  width: 90%;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const SelectBookingDates = styled.div`
display: flex;
flex-direction: row;
  @media (max-width: 768px) {
  }
`;

const SelectTravellersNumber = styled.div`
`;

const OptionChoice = styled.div`
border: 2px solid #1c2c46;
border-radius: 5px;
width: 90%;
margin: auto;
margin-bottom: 10px;
`;

const Options = styled.div`
`;

const TitleOption = styled.h2`
margin-top: 1rem;
  width: auto;
  cursor: pointer;
  
  &:hover {
    color: #eeeb8f;
  }
`;

const PriceDetails = styled.div`
border: 2px solid #1c2c46;
border-radius: 5px;
line-height: 2rem;
width: 90%;
margin: auto;
margin-bottom: 10px;
`;

export default BookingForm;
