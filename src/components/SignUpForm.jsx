import { useForm } from "react-hook-form";
import styled from "styled-components";

function SignUpForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <ContainerForm>
      <Title>Créer un compte</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("sex")}>
          <option value="madame">Madame</option>
          <option value="mister">Monsieur</option>
        </select>
        <br />
        <input type="text" placeholder="Nom" {...register("lastname")} />
        <br />
        <input type="text" placeholder="Prénom" {...register("firstname")} />
        <br />
        <input
          type="date"
          placeholder="Date de naissance"
          {...register("dateOfBirth")}
        />
        <br />
        <input type="email" placeholder="Email" {...register("email")} />
        <br />
        <input type="textarea" placeholder="Adresse" {...register("adress")} />
        <br />
        <input type="text" placeholder="Code postal" {...register("adress")} />
        <br />
        <input type="text" placeholder="Ville" {...register("adress")} />
        <br />
        <input type="tel" placeholder="Téléphone" {...register("adress")} />
        <br />
        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password")}
        />
        <br />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          {...register("confirmPassword")}
        />
        <br />
        <button type="submit">Envoyer</button>
      </Form>
    </ContainerForm>
  );
}

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c2c46;
  width: 60%;
  border-radius: 15px;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 16px;
`;

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

  button {
    height: 32px;
    border-radius: 8px;
    background-color: #ba9b5c;
  }
`;

export default SignUpForm;
