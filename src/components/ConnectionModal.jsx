import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ContainerForm from "./styled-components/ContainerForm";
import TitleForm from "./styled-components/TitleForm";
import Submitbutton from "./styled-components/SubmitButton";
import { UserContext } from "../contexts/user";
import axios from "../helper/axios-config";
import { ADMIN } from "../constants/roles";
import StyledLink from "./styled-components/Link";
import Navigation from "./Navigation";

const ConnectionModal = () => {
  const { register, handleSubmit } = useForm();
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("/login", data)
      .then((res) => res.data)
      .then((user) => {
        dispatch({
          type: "CONNECTION",
          payload: { userId: user.id, roleId: user.role_id },
        });
        if (user.role_id === ADMIN) {
          navigate("/admin/dashboard", { replace: true });
        } else {
          navigate("/", { replace: true });
        }
      });
  };

  return (
    <>
      <Navigation />
      <BackgroundImage>
        <MainContainer>
          <ContainerForm
            width="500px"
            height="300px"
            marginTop="8%"
            marginBottom="8%"
          >
            <TitleForm>Connexion</TitleForm>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <ConnectionInfos>
                <input
                  type="email"
                  placeholder=" Email"
                  {...register("email")}
                />
                <br />
                <input
                  type="password"
                  placeholder=" Mot de passe"
                  {...register("password")}
                />
                <LineContainer>
                  <StyledLink to="/creation-compte">
                    <TextHover>Créer un compte ?</TextHover>
                  </StyledLink>
                </LineContainer>
              </ConnectionInfos>
              <br />
              <Submitbutton type="submit" fontSize="1em" margin="auto">
                Se connecter
              </Submitbutton>
              <br />
            </Form>
          </ContainerForm>
        </MainContainer>
      </BackgroundImage>
    </>
  );
};

const BackgroundImage = styled.div`
  background-image: url("../ressources/background-image-login-2.jpg");
  width: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* object-fit: cover; */
  /* min-height: 100vh; */
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
  width: 70%;
  padding: 10px;

  input {
    background-color: white;
    border-radius: 8px;
    height: 32px;
    width: 100%;
    align-content: center;
    margin-bottom: 5px;
  }
`;

const ConnectionInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin-top: 15px;
`;

const TextHover = styled.p`
  color: white;
  font-weight: bold;

  &:hover {
    color: #eeeb8f;
    cursor: pointer;
  }
`;

const LineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    line-height: 2em;
  }
`;

export default ConnectionModal;
