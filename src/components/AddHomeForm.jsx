import { useForm } from "react-hook-form";
import styled from "styled-components";

function AddHomeForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <ContainerForm>
      <div>
        <h1>Ajouter une nouvelle maison à la location</h1>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Oneform>
            <label htmlFor="nameOfHouse">
              Nom de la maison :<br />
              <textarea type="text" {...register("nameOfHouse")} />
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
            <label htmlFor="region">
              Région :<br />
              <textarea type="text" {...register("region")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="travellersNumber">
              Nombre de voyageurs :<br />
              <textarea type="number" {...register("travellersNumber")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="roomsNumber">
              Nombre de chambres :<br />
              <textarea type="number" {...register("roomsNumber")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="bedsNumber">
              Nombre de lits :<br />
              <textarea type="number" {...register("bedsNumber")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="shortDescription">
              Description courte :<br />
              <textarea type="textarea" {...register("shortDescription")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="longDescription">
              Description longue :<br />
              <textarea type="textarea" {...register("longDescription")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="activitiesAround">
              Activités :<br />
              <textarea type="textarea" {...register("activitiesAround")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="address">
              Adresse :<br />
              <textarea type="textarea" {...register("address")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="rulesAndRegulations">
              Règlement intérieur :<br />
              <textarea type="textarea" />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="cancellationPolicies">
              Conditions d'annulation :<br />
              <textarea type="textarea" {...register("cancellationPolicies")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="pricePerNight">
              Prix/nuit :<br />
              <textarea type="text" {...register("pricePerNight")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="pictures">
              Ajouter des photos :<br />
              <input type="file" {...register("pictures")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="availability">
              Disponibilités à la location :<br />
              <input type="date" {...register("availability")} />
              <input type="date" {...register("availability")} />
            </label>
            <br />
          </Oneform>

          <Oneform>
            <label htmlFor="equipments">
              Renseigner les équipements :
              <select {...register("equipements")}>
                <option value="bathroom">Salle de bain</option>
                <option value="kitchenAndDiningRoom">
                  Cuisine et salle à manger
                </option>
                <option value="bedRoom">Chambre</option>
                <option value="entertainments">Divertissements</option>
                <option value="family">Famille</option>
                <option value="heatingAndAirConditioning">
                  Chauffage et climatisation
                </option>
                <option value="securityAtHome">Sécurité à la maison</option>
                <option value="internetAndDesk">Internet et bureau</option>
                <option value="outside">Extérieur</option>
                <option value="parkingAndFacilities">Extérieur</option>
              </select>
            </label>
            <br />
          </Oneform>
          <Submit>
            <input type="submit" />
          </Submit>
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

export default AddHomeForm;
