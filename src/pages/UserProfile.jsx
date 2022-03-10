import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { deleteUser, fetchUserWithId } from '../api/users';
import Global from '../components/styled-components/theme/Global';
import UserInfosTable from '../components/user/UserInfosTable';
import UserModifyPasswordForm from '../components/user/UserModifyPasswordForm';
import { UserContext } from '../contexts/user';

function UserProfile() {
  const { userId } = useContext(UserContext);
  const [user, setUser] = useState({});

  const loadUserData = async (id) => {
    try {
      const fetchedUser = await fetchUserWithId(id);
      setUser(fetchedUser);
    } catch (error) {
      toast.error('Problème pendant la récupération des données !', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    if (userId) {
      loadUserData(userId);
    }
  }, [userId]);

  const deleteAccount = async (id) => {
    try {
      await deleteUser(id);
      
    } catch (error) {
      toast.error('Nous avons rencontré une erreur pendant la suppression de votre compte')
    }
  };

  return (
    <>
      <Global>Profil Utilisateur</Global>
      <>
        {user ? (
          <>
            <UserInfosTable user={user} />
            <UserModifyPasswordForm />
            <button type='button' onClick={() => deleteAccount(userId)}>Supprimer le compte</button>
          </>
        ) : (
          <p>Problème lors du chargement des données</p>
        )}
        <ToastContainer />
      </>
    </>
  );
}

export default UserProfile;
