/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import TitleForm from "./styled-components/TitleForm";
import ContainerForm from "./styled-components/ContainerForm";
import Submitbutton from "./styled-components/SubmitButton";
import createUsers from "../data/createUsers";
import Navigation from "./Navigation";


function SignUpForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    createUsers(data);
    toast.success("Le compte à bien été crée !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Navigation />
      <MainContainer>
        <ContainerForm marginTop="2rem" marginBottom="2rem">
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
            <label htmlFor="password">
              Mot de passe* : <br />
              <input
                type="password"
                placeholder="Mot de passe"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
            </label>
            <br />

            <Submitbutton 
              type="submit"
              marginTop="1.5rem"
              backgroundColor="#1c2c46"
            >
              Envoyer
            </Submitbutton>
            <ToastContainer />
          </Form>
        </ContainerForm>
      </MainContainer>
    </>
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
    padding: 0 1rem;
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

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default SignUpForm;
