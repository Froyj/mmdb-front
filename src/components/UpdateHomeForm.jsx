import { useForm } from "react-hook-form";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import updateHouses from "../data/updateHouses";

function UpdateHomeForm() {
  const { register, handleSubmit } = useForm();

  const { id } = useParams();

  const updateHouse = (data) => {
   updateHouses(data,id);
  };

  return (
    <ContainerForm>
      <div>
        <h1>Modifier une maison à la location</h1>

        <Form onSubmit={handleSubmit(updateHouse)}>
          <Oneform>
            <label htmlFor="name">
              Nom de la maison :<br />
              <textarea type="text" {...register("name", { required: true })} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="capacity">
              Capacité d'accueil :<br />
              <textarea
                type="text"
                {...register("capacity", {
                  valueAsNumber: true,
                  required: true,
                })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="adress">
              Adresse :<br />
              <textarea
                type="textarea"
                {...register("adress", { required: true })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="zipcode">
              code postal :<br />
              <textarea
                type="text"
                {...register("zipcode", {
                  valueAsNumber: true,
                  required: true,
                })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="city">
              Ville :<br />
              <textarea type="text" {...register("city", { required: true })} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="country">
              Région :<br />
              <textarea
                type="text"
                {...register("country", { required: true })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="coordinate_long">
              Longitude :<br />
              <textarea
                type="textarea"
                {...register("coordinate_long", { required: true })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="coordinate_lat">
              Latitude :<br />
              <textarea
                type="textarea"
                {...register("coordinate_lat", { required: true })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="price_by_night">
              Prix/nuit :<br />
              <textarea
                type="text"
                {...register("price_by_night", {
                  valueAsNumber: true,
                  required: true,
                })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="describe_short">
              Description courte :<br />
              <textarea
                type="textarea"
                {...register("describe_short", { required: true })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="describe_long">
              Description longue :<br />
              <textarea
                type="textarea"
                {...register("describe_long", { required: true })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="opening_disponibility">
              Disponibilités à la location :<br />
              <input
                type="date"
                {...register("opening_disponibility", { required: true })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="closing_disponibility">
              Fin de disponibilité :<br />
              <input
                type="date"
                {...register("closing_disponibility", { required: true })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="arrival_hour">
              Horaire d'arrivée :<br />
              <textarea
                type="textarea"
                {...register("arrival_hour", { required: true })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="departure_hour">
              Horaire de départ :<br />
              <textarea
                type="textarea"
                {...register("departure_hour", { required: true })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="square_meter">
              Surface d'habitation :<br />
              <textarea
                type="text"
                {...register("square_meter", {
                  valueAsNumber: true,
                  required: true,
                })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="renting_conditions.condition">
              Conditions d'annulation :<br />
              <textarea
                type="textarea"
                {...register("renting_conditions.condition", {
                  required: true,
                })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="image.principal">
              Image principale :<br />
              <input
                type="file"
                {...register("image.principal", { required: true })}
              />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="image.secondaire">
              Image secondaire :<br />
              <input type="file" {...register("image.secondaire")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="is_smoker">
              Fumeur :<br />
              <select {...register("is_smoker", { valueAsNumber: true })}>
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </label>
            <br />
          </Oneform>

          <Submit>
            <input type="submit" />
          </Submit>
          <NavLink exact to="/Administrateur">
            <Submit>Retour en arrière</Submit>
          </NavLink>
        </Form>
      </div>
    </ContainerForm>
  );
}

const ContainerForm = styled.div`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 20px;
  font-weight: bold;
  text-decoration: underline #1c2c46;
  color: #1c2c46;
  background-color: #f3f9f2;
  width: 90%;
  display: flex;
  margin: auto;
  padding: 15px;
  border: 5px solid #ba9b5c;
  border-radius: 10px;

  h1 {
    text-align: center;
  }

  textarea {
    font-size: 15px;
  }
`;

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

export default UpdateHomeForm;
