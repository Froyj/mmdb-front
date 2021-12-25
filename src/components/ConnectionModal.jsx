import { useForm } from "react-hook-form";
import styled from "styled-components";

const ConnectionModal = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <div>
      <ContainerForm>
        <Title>Connexion</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ConnectionInfos>
            <input type="email" placeholder="Email" {...register("email")} />
            <br />
            <input
              type="password"
              placeholder="Mot de passe"
              {...register("password")}
            />
            <p>Mot de passe oublié ?</p>
            <DontHaveAnAccountYet>
              <p>Pas encore de compte ?</p>
            </DontHaveAnAccountYet>
          </ConnectionInfos>
          <Choice>
            <LogIn>
              <button type="submit">Me connecter</button>
            </LogIn>
            <SignUp>
              <button type="submit">Créer un compte</button>
            </SignUp>
          </Choice>
        </Form>
      </ContainerForm>
      );
    </div>
  );
};

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c2c46;
  width: 50%;
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
  width: 85%;
  padding: 16px;

  input {
    background-color: white;
    border-radius: 8px;
    height: 32px;
    width: 100%;
    align-content: center;
  }
`;

const ConnectionInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const Choice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const DontHaveAnAccountYet = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LogIn = styled.div`
  button {
    height: 32px;
    border-radius: 8px;
    background-color: #ba9b5c;
    color: white;
    width: 12rem;
  }
`;

const SignUp = styled.div`
  display: flex;
  flex-direction: column;

  button {
    height: 32px;
    border-radius: 8px;
    background-color: #ba9b5c;
    color: white;
    width: 12rem;
  }
`;

export default ConnectionModal;
