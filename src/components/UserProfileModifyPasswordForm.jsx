import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import axios from '../api/axios-config';
import { UserContext } from '../contexts/user';
import FilledButton from './common/buttons/FilledButton';

const UserProfileModifyPasswordForm = () => {
  const { userId } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (formData) => {
    const { password } = formData;
    axios
      .put(`/users/${userId}`, { password })
      .then(() => {
        toast.success('Le mot de passe a été modifié');
      })
      .catch(() => {
        toast.error(
          `Erreur pendant la modification du mot de passe. Veuillez contacter l'administrateur du site`
        );
      });
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor='new-password'>
          Nouveau mot de passe
          <FormInput
            type='password'
            id='new-password'
            {...register('password', { required: true, minLength: 6 })}
          />
          <FormError>
            {errors.password?.type === 'required' && 'Champs obligatoire'}
            {errors.password?.type === 'minLength' &&
              'Le mot de passe doit faire 6 caractères minimum'}
          </FormError>
        </FormLabel>
        <FormLabel htmlFor='confirmation-password'>
          Confirmez le mot de passe
          <FormInput
            type='password'
            id='confirmation-password'
            {...register('confirmationPassword', {
              required: true,
              validate: (v) => v === getValues('password'),
            })}
          />
          <FormError>
            {errors.confirmationPassword?.type === 'required' &&
              'Champs obligatoire'}
            {errors.confirmationPassword?.type === 'validate' &&
              'Les mots de passes saisis doivent être identique'}
          </FormError>
        </FormLabel>
        <span>
          <FilledButton>Modifier le mot de passe</FilledButton>
        </span>
      </form>
    </>
  );
};

export default UserProfileModifyPasswordForm;

const FormLabel = styled.label`
  display: block;
  margin: 1em 0;
`
const FormInput = styled.input`
  display: block;
`

const FormError = styled.p`
  color: red; 
`