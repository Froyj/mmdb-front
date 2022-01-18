import { useForm } from "react-hook-form";

import { NavLink } from "react-router-dom";

import styled from "styled-components";
import FilledButton from "./styled-components/FilledButton";
import postHouses from "../data/postHouses";
import colors from "./styled-components/colors";

function AddHomeForm() {
  const { register, handleSubmit } = useForm();

  const imgData = new FormData();

  const postData = (data) => {
    const principalImg = data.image.primary[0];
    const secondaryImg = data.image.secondary;

    imgData.append("image.primary", principalImg);
    for (let i = 0; i < secondaryImg.length; i += 1) {
      console.log(secondaryImg[i]);
      imgData.append("image.secondary", secondaryImg[i]);
    }

    postHouses(imgData, data);
  };

  return (
        <FormContainer onSubmit={handleSubmit(postData)} enctype="multipart/form-data">
          <Entry type="text" placeholder="Nom de la maison" {...register("name", { required: true })} />
            {/* <label htmlFor="name">
              Nom de la maison :<br />
              <textarea
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
            </label>
            <br />
          </Input> */}

          <Input>
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
          </Input>

          <Input>
            <label htmlFor="adress">
              Adresse :<br />
              <textarea
                type="textarea"
                {...register("adress", { required: true })}
              />
            </label>
            <br />
          </Input>

          <Input>
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
          </Input>

          <Input>
            <label htmlFor="city">
              Ville :<br />
              <textarea type="text" {...register("city", { required: true })} />
            </label>
            <br />
          </Input>

          <Input>
            <label htmlFor="country">
              Région :<br />
              <textarea
                type="text"
                {...register("country", { required: true })}
              />
            </label>
            <br />
          </Input>

          <Input>
            <label htmlFor="coordinate_long">
              Longitude :<br />
              <textarea
                type="textarea"
                {...register("coordinate_long", { required: true })}
              />
            </label>
            <br />
          </Input>

          <Input>
            <label htmlFor="coordinate_lat">
              Latitude :<br />
              <textarea
                type="textarea"
                {...register("coordinate_lat", { required: true })}
              />
            </label>
            <br />
          </Input>

          <Input>
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
          </Input>

          <Input>
            <label htmlFor="describe_short">
              Description courte :<br />
              <textarea
                type="textarea"
                {...register("describe_short", { required: true })}
              />
            </label>
            <br />
          </Input>

          <Input>
            <label htmlFor="describe_long">
              Description longue :<br />
              <textarea
                type="textarea"
                {...register("describe_long", { required: true })}
              />
            </label>
            <br />
          </Input>

          <Input>
            <label htmlFor="opening_disponibility">
              Disponibilités à la location :<br />
              <input
                type="date"
                {...register("opening_disponibility", { required: true })}
              />
            </label>
            <br />
          </Input>

          <Input>
            <label htmlFor="closing_disponibility">
              Fin de disponibilité :<br />
              <input
                type="date"
                {...register("closing_disponibility", { required: true })}
              />
            </label>
            <br />
          </Input>

          <Input>
            <label htmlFor="arrival_hour">
              Horaire d'arrivée :<br />
              <textarea
                type="textarea"
                {...register("arrival_hour", { required: true })}
              />
            </label>
            <br />
          </Input>

          <Input>
            <label htmlFor="departure_hour">
              Horaire de départ :<br />
              <textarea
                type="textarea"
                {...register("departure_hour", { required: true })}
              />
            </label>
            <br />
          </Input>

          <Input>
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
          </Input>

          <Input>
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
          </Input>

          <Input>
            <label htmlFor="image.primary">
              Image principale :<br />
              <input
                type="file"
                name="image.primary"
                {...register("image.primary", { required: true })}
              />
            </label>
            <br />
          </Input>

          <Input>
            <label htmlFor="image.secondary">
              Image secondaire :<br />
              <input
                type="file"
                name="image.secondary"
                multiple
                {...register("image.secondary")}
              />
            </label>
            <br />
          </Input>

          <Input>
            <label htmlFor="is_smoker">
              Fumeur :<br />
              <select {...register("is_smoker", { valueAsNumber: true })}>
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </label>
            <br />
          </Input>
          
          <Submit type='submit' value="Valider"/>
          <NavLink exact to="/Administrateur">
            <FilledButton>Retour en arrière</FilledButton>
          </NavLink>
        </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`
const Entry = styled.input`
  display: flex;
`
const Input = styled.div`
  margin-top: 5%;
`
const Submit = styled.input`
    border: none;
    border-radius: 6px;
    background-color: ${colors.blue};
    padding: .6rem 2.5rem;
    margin: .5rem;
    color: white;
`

export default AddHomeForm;
