import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ContainerForm from './styled-components/ContainerForm';
import TitleForm from './styled-components/TitleForm';
import Submitbutton from './styled-components/SubmitButton';


const ConnectionModal = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data); }
    
    return (
        <ContainerForm>
            <TitleForm>Connexion</TitleForm>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ConnectionInfos>
                    <input type="email" placeholder=" Email" {...register("email")} />
                    <br />
                    <input
              type="password"
              placeholder=" Mot de passe"
              {...register("password")}
            />
            <LineContainer>
              <Link to="/CreationCompte">
            <TextHover>
            Créer un compte ?
            </TextHover>
              </Link>
            </LineContainer>
                </ConnectionInfos>
                <br />
                <Submitbutton type="submit" fontSize="1em" margin='auto'>Se connecter</Submitbutton>
            </Form>
        </ContainerForm>
    );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  width: 60%;
  padding: 10px;

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

const TextHover = styled.p`
    color:#1c2c46;
    text-decoration: underline #F3F9F3;

    &:hover {
      color:#eeeb8f;
      cursor: pointer;
  }
`;

const LineContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
    flex-direction: column;
    line-height: 2em;
    }
`;


export default ConnectionModal;
