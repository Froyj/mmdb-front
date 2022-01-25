/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from "react-hook-form";
import styled from "styled-components";
import TitleForm from "./styled-components/TitleForm";
import ContainerForm from "./styled-components/ContainerForm";
import Submitbutton from "./styled-components/SubmitButton";
import createUsers from "../data/createUsers";

function SignUpForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    createUsers(data);
  };

  return (
    <ContainerForm>
      <TitleForm>Créer un compte</TitleForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="genre">
          <select {...register("genre", { required: true })}>
            <option value="Mme">Madame</option>
            <option value="Mr">Monsieur</option>
          </select>
        </label>
        <br />
        <label htmlFor="lastname">
          Nom* : <br />
          <input
            type="text"
            placeholder="Nom"
            {...register("lastname", { required: true })}
          />
        </label>
        <br />
        <label htmlFor="firstname">
          Prénom* : <br />
          <input
            type="text"
            placeholder="Prénom"
            {...register("firstname", { required: true })}
          />
        </label>
        <br />
        <label htmlFor="birth_date">
          Date de naissance* : <br />
          <input
            type="date"
            placeholder="Date de naissance"
            {...register("birth_date", { required: true })}
          />
        </label>
        <br />
        <label htmlFor="email">
          Email* : <br />
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </label>
        <br />
        <label htmlFor="adress">
          Adresse* : <br />
          <input
            type="textarea"
            placeholder="Adresse"
            {...register("adress", { required: true })}
          />
        </label>
        <br />
        <label htmlFor="zipcode">
          Code postal* : <br />
          <input
            type="text"
            placeholder="Code postal"
            {...register("zipcode", {
              valueAsNumber: true,
              required: true,
            })}
          />
        </label>
        <br />
        <label htmlFor="city">
          Ville* : <br />
          <input
            type="text"
            placeholder="Ville"
            {...register("city", { required: true })}
          />
        </label>
        <br />
        <label htmlFor="phone">
          Téléphone* : <br />
          <input
            type="tel"
            placeholder="Téléphone"
            {...register("phone", { required: true })}
          />
        </label>
        <br />
        <label htmlFor="hashed_password">
          Mot de passe* : <br />
          <input
            type="password"
            placeholder="Mot de passe"
            {...register("hashed_password", { required: true })}
          />
        </label>
        <br />
        {/* <label>
          Confirmation mot de passe* : <br />
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            {...register("confirmPassword", { required: true })}
          />
        </label>
        <br /> */}
        <Submitbutton type="submit">Envoyer</Submitbutton>
      </Form>
    </ContainerForm>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  width: 80%;
  padding: 16px;

  select {
    width: 30%;
  }

  input {
    background-color: white;
    border-radius: 8px;
    height: 32px;
    width: 80%;
  }

  label {
    color: #1c2c46;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }
`;

export default SignUpForm;
