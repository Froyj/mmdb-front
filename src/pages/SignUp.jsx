/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import TitleForm from '../components/common/titles/TitleForm';
import ContainerForm from '../components/common/containers/ContainerForm';
import Submitbutton from '../components/common/buttons/SubmitButton';
import { UserContext } from '../contexts/user';
import AuthController from '../api/auth';

function SignUpForm() {
  const { isConnected, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    AuthController.register(data)
      .then(() =>
        toast.success('Le compte à bien été crée !', {
          closeOnClick: true,
        })
      )
      .then(() =>
        AuthController.authenticate({
          email: data.email,
          password: data.password,
        })
          .then((user) =>
            dispatch({
              type: 'CONNECTION',
              payload: { userId: user.id, roleId: user.role_id },
            })
          ).then(() => navigate('/profil'))
          .catch(() =>
            toast.error('Problème lors de la création du compte')
          )
      );
  };
  return (
    <>
      {isConnected && <Navigate to='/profil' />}
      <MainContainer>
        <ContainerForm marginTop='2rem' marginBottom='2rem'>
          <TitleForm>Créer un compte</TitleForm>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='genre'>
              <select {...register('genre', { required: true })}>
                <option value='Mme'>Madame</option>
                <option value='Mr'>Monsieur</option>
              </select>
            </label>
            <br />
            <label htmlFor='lastname'>
              Nom* : <br />
              <input
                type='text'
                placeholder='Nom'
                {...register('lastname', { required: true })}
              />
            </label>
            <br />
            <label htmlFor='firstname'>
              Prénom* : <br />
              <input
                type='text'
                placeholder='Prénom'
                {...register('firstname', { required: true })}
              />
            </label>
            <br />
            <label htmlFor='birth_date'>
              Date de naissance* : <br />
              <input
                type='date'
                placeholder='Date de naissance'
                {...register('birth_date', { required: true })}
              />
            </label>
            <br />
            <label htmlFor='email'>
              Email* : <br />
              <input
                type='email'
                placeholder='Email'
                {...register('email', { required: true })}
              />
            </label>
            <br />
            <label htmlFor='adress'>
              Adresse* : <br />
              <input
                type='textarea'
                placeholder='Adresse'
                {...register('adress', { required: true })}
              />
            </label>
            <br />
            <label htmlFor='zipcode'>
              Code postal* : <br />
              <input
                type='text'
                placeholder='Code postal'
                {...register('zipcode', {
                  required: true,
                })}
              />
            </label>
            <br />
            <label htmlFor='city'>
              Ville* : <br />
              <input
                type='text'
                placeholder='Ville'
                {...register('city', { required: true })}
              />
            </label>
            <br />
            <label htmlFor='phone'>
              Téléphone* : <br />
              <input
                type='tel'
                placeholder='Téléphone'
                {...register('phone', { required: true })}
              />
            </label>
            <br />
            <label htmlFor='password'>
              Mot de passe* : <br />
              <input
                type='password'
                placeholder='Mot de passe'
                {...register('password', {
                  required: true,
                  minLength: {
                    value: 8,
                    message: 'Password must have at least 8 characters',
                  },
                })}
              />
            </label>
            <br />

            <Submitbutton
              type='submit'
              marginTop='1.5rem'
              backgroundColor='#1c2c46'
            >
              Envoyer
            </Submitbutton>
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
