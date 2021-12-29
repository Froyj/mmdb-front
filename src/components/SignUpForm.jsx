/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from "react-hook-form";
import styled from "styled-components";
import TitleForm from "./styled-components/TitleForm";
import ContainerForm from "./styled-components/ContainerForm";
import Submitbutton from "./styled-components/SubmitButton";

function SignUpForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <ContainerForm>
      <TitleForm>Créer un compte</TitleForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("sex", {required: true})}>
          <option value="madame">Madame</option>
          <option value="mister">Monsieur</option>
        </select>
        <br />
        <em>Nom* :</em>
        <input type="text" placeholder="Nom" {...register("lastname", {required: true})} />
        <br />
        <em>Prénom* :</em>
        <input type="text" placeholder="Prénom" {...register("firstname", {required: true})} />
        <br />
        <em>Date de naissance* :</em>
        <input
          type="date"
          placeholder="Date de naissance"
          {...register("dateOfBirth", {required: true})}
        />
        <br />
        <em>Email* :</em>
        <input type="email" placeholder="Email" {...register("email", {required: true})} />
        <br />
        <em>Adresse* :</em>
        <input type="textarea" placeholder="Adresse" {...register("adress", {required: true})} />
        <br />
        <em>Code postal* :</em>
        <input type="text" placeholder="Code postal" {...register("zipcode", {required: true})} />
        <br />
        <em>Ville* :</em>
        <input type="text" placeholder="Ville" {...register("city", {required: true})} />
        <br />
        <em>Téléphone* :</em>
        <input type="tel" placeholder="Téléphone" {...register("phone", {required: true})} />
        <br />
        <em>Mot de passe* :</em>
        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password", {required: true})}
        />
        <br />
        <em>Confirmation mot de passe* :</em>
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          {...register("confirmPassword", {required: true})}
        />
        <br />
      </Form>
      <Submitbutton type="submit">Envoyer</Submitbutton>
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
  }
  
  em{
    color: #1c2c46;
  }
  `;

export default SignUpForm;
