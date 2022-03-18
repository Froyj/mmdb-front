import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { updateUser } from '../../api/users';
import { UserContext } from '../../contexts/user';

const UserModifyPasswordForm = () => {
  const { register, handleSubmit } = useForm();
  const { userId } = useContext(UserContext);

  const onSubmit = (data) => {
    const { password, passwordConfirmation } = data;
    if (password === passwordConfirmation) {
      try {
        updateUser(userId, { password });
      } catch (error) {
        toast.error(
          "Le mot de passe n'a pas été modifié ! N'hésitez pas à nous contacter si le problème persiste.",
          {
            position: 'top-center',
          }
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='password'>
        <input type='password' {...register('password')} />
      </label>
      <label htmlFor='password-confirmation'>
        <input type='password' {...register('passwordConfirmation')} />
      </label>
      <input type='submit' value='Modifier' />
    </form>
  );
};

export default UserModifyPasswordForm;
