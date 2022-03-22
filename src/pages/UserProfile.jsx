import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import FilledButton from '../components/common/buttons/FilledButton';
import UserProfileModifyPasswordForm from '../components/UserProfileModifyPasswordForm';
import UserProfileInfosList from '../components/UserProfileInfosList';
import Container from '../components/common/containers/Container';
import { deleteUser, fetchUserWithId } from '../api/users';
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
      <Main>
        <Container flexDirection='column' flexGrow='1' margin='1rem'>
          <h1>Informations de profil</h1>
          <UserProfileInfosList user={user}/>
        </Container>
        <Container flexDirection='column' justifyContent="space-between" margin='1rem'>
          <Container flexDirection='column'>
            <h1>Modifier le mot de passe</h1>
            <UserProfileModifyPasswordForm />
          </Container>
          <Container>
            <FilledButton onClick={() => {
            const confirmBox = window.confirm('Voulez vous vraiment supprimer votre compte ? cette action est irréversible.');
            if (confirmBox === true) {
              deleteAccount(userId);
            }
          }} >Supprimer mon compte</FilledButton>
          </Container>
        </Container>
      </Main>
    </>
  );
}

export default UserProfile;

const Main = styled.section`
  margin: 0.5rem;
  padding: 1.5em 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h1 {
    font-size: 1.5rem;
  }
  @media (min-width: 596px) {
    max-width: 700px;
    min-width: 500px;
    margin: auto;
  }
`;
