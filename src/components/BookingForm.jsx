import { useForm } from "react-hook-form";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import SubmitButton from "./styled-components/SubmitButton";

function BookingForm({ houses, id }) {
  BookingForm.propTypes = {
    houses: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const [mealOptions, setMealOptions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/options`)
      .then((response) => response.data)
      .then((meals) => {
        const menu = meals.reduce((accu, current) => {
          const copyAccu = {...accu}
          if (!copyAccu[current.name]){
            copyAccu[current.name] = current.dish;
          } 
          return copyAccu
        }, {})
        return menu;
      })
      .then((data) => setMealOptions(data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
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
                max={houses[id - 1].capacity}
              /> 
            </label>
            <br />
          </SelectTravellersNumber>
        </QuickBooking>
        <OptionChoice>
          <label htmlFor="optionFridge">
            <h1>Repas</h1>
            <h2>{mealOptions.breakfast}</h2>
            <ul>
              {mealOptions.breakfast.dish.map((el) => (
                <li>
                  {el.name}
                  {el.price}
                </li>
              ))}
            </ul>
            <br />
            <input type="checkbox" {...register("optionfridge")} />
          </label>
          <br />
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
  width: 100%;
  border-radius: 15px;
  h1 {
    text-align: center;
  }
`;

const QuickBooking = styled.div``;

const SelectBookingDates = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SelectTravellersNumber = styled.div`
  padding: 10px 0 10px 0;
`;

const OptionChoice = styled.div``;

const PriceDetails = styled.div``;

export default BookingForm;
