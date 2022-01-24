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

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5500/options")
  //     .then((response) => response.data)
  //     .then((meals) => {
  //       const menu = meals.reduce((accu, current) => {
  //         const copyAccu = {...accu}
  //         if (!copyAccu[current.name]){
  //           copyAccu[current.name] = current.dish;
  //         } 
  //         // console.log(`copyAccu ${  copyAccu}`);
  //         return copyAccu
  //       }, {})
  //       return menu;
  //     })
  //     .then((data) => setMealOptions(data))
  //     // eslint-disable-next-line no-console
  //     .catch((err) => console.log(err));
  // }, []);
  
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
        <TitleOption>Repas</TitleOption>
        {mealOptions
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
  background-color: #1c2c46;
  color: white;
  width: 450px;
  border-radius: 15px;

  h1 {
    text-align: center;
    padding: 20px 20px;
  }
`;

const QuickBooking = styled.div`
  text-align: center;

`;

const SelectBookingDates = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SelectTravellersNumber = styled.div`
  padding: 10px 0 10px 0;
  text-align: center;
`;

const OptionChoice = styled.div``;

const TitleOption = styled.h1``;

const PriceDetails = styled.div``;

export default BookingForm;
