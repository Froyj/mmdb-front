import { useForm } from "react-hook-form";

import styled from "styled-components";
import axios from "axios";
import ContainerAddHouse from "./styled-components/ContainerAddHouse";

function AddHomeForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/home_to_rent", {
        ...data,
        capacity: parseInt(data.capacity, 10),
        zipcode: parseInt(data.zipcode, 10),
        price_by_night: parseInt(data.price_by_night, 10),
        is_smoker: parseInt(data.is_smoker, 10),
        opening_disponibility: `${data.opening_disponibility}T00:00:00.000Z`,
        closing_disponibility: `${data.closing_disponibility}T00:00:00.000Z`,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContainerAddHouse>
      <div>
        <h1>Ajouter une nouvelle maison à la location</h1>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Oneform>
            <label htmlFor="name">
              Nom de la maison :<br />
              <textarea type="text" {...register("name")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="city">
              Ville :<br />
              <textarea type="text" {...register("city")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="country">
              Région :<br />
              <textarea type="text" {...register("country")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="capacity">
              Nombre de voyageurs :<br />
              <textarea type="number" {...register("capacity")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="zipcode">
              code postal :<br />
              <textarea type="number" {...register("zipcode")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="describe_short">
              Description courte :<br />
              <textarea type="textarea" {...register("describe_short")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="describe_long">
              Description longue :<br />
              <textarea type="textarea" {...register("describe_long")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="is_smoker">
              smoker :<br />
              <textarea type="textarea" {...register("is_smoker")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="adress">
              Adresse :<br />
              <textarea type="textarea" {...register("adress")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="renting_conditions">
              Conditions d'annulation :<br />
              <textarea type="textarea" {...register("renting_conditions")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="departure_hour">
              departure_hour :<br />
              <textarea type="textarea" {...register("departure_hour")} />
            </label>
            <br />
            <label htmlFor="arrival_hour">
              arrival_hour :<br />
              <textarea type="textarea" {...register("arrival_hour")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="price_by_night">
              Prix/nuit :<br />
              <textarea type="text" {...register("price_by_night")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="opening_disponibility">
              Disponibilités à la location :<br />
              <input type="date" {...register("opening_disponibility")} />
            </label>
            <br />
            <label htmlFor="closing_disponibility">
              dispo loc :<br />
              <input type="date" {...register("closing_disponibility")} />
            </label>
            <br />
          </Oneform>
          <Submit>
            <input type="submit" />
          </Submit>
        </Form>
      </div>
    </ContainerAddHouse>
  );
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  line-height: 50px;
  margin: 0 5px;

  textarea {
    width: 250px;
    height: 200px;
  }
`;

const Oneform = styled.div`
  margin-top: 5%;
`;

const Submit = styled.div`
  margin: 20px;
  text-align: center;

  input {
    background-color: #ba9b5c;
    border-radius: 10px;
    color: #f3f9f2;
    height: 50px;
    width: 200px;
    font-size: 1.3em;
  }
`;

export default AddHomeForm;
