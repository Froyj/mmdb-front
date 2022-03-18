import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
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
        <label htmlFor='new-password'>
          <input
            type='password'
            id='new-password'
            {...register('password', { required: true, minLength: 6 })}
          />
          <p>
            {errors.password?.type === 'required' && 'Champs obligatoire'}
            {errors.password?.type === 'minLength' &&
              'Le mot de passe doit faire 6 caractères minimum'}
          </p>
        </label>
        <label htmlFor='confirmation-password'>
          <input
            type='password'
            id='confirmation-password'
            {...register('confirmationPassword', {
              required: true,
              validate: (v) => v === getValues('password'),
            })}
          />
          <p>
            {errors.confirmationPassword?.type === 'required' &&
              'Champs obligatoire'}
            {errors.confirmationPassword?.type === 'validate' &&
              'Les mots de passes saisis doivent être identique'}
          </p>
        </label>
        <FilledButton>Modifier le mot de passe</FilledButton>
      </form>
    </>
  );
};

export default UserProfileModifyPasswordForm;
