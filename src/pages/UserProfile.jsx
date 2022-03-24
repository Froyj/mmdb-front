import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import Container from '../components/common/containers/Container';
import FilledButton from '../components/common/buttons/FilledButton';

import UserProfileModifyPasswordForm from '../components/UserProfileModifyPasswordForm';
import UserProfileInfosList from '../components/UserProfileInfosList';
import UserBookingList from '../components/user/UserBookingList';

import { deleteUser, fetchUserWithId } from '../api/users';
import { getUserBookings } from '../api/bookings';
import { UserContext } from '../contexts/user';
import { REGISTERED_USER } from '../constants/roles';

function UserProfile() {
  const { userId, roleId, dispatch } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [bookings, setBookings] = useState([]);

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

  const loadUserBookings = async () => {
    try {
      const fetchedBooking = await getUserBookings(userId);
      setBookings(fetchedBooking);
    } catch (error) {
      console.log(error);
      toast.error('Problème pendant la récupération de vos réservations !', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    if (userId) {
      loadUserData(userId);
      loadUserBookings(userId);
    }
  }, [userId]);

  const deleteAccount = async (id) => {
    try {
      await deleteUser(id)
        .then(() => toast.success('Compte supprimé avec succès'))
        .then(() => dispatch({ type: 'DISCONNECTION' }));
    } catch (error) {
      toast.error(
        'Nous avons rencontré une erreur pendant la suppression de votre compte'
      );
    }
  };

  return (
    <>
      {roleId !== REGISTERED_USER && <Navigate to='/' />}
      <Main>
        <Container flexDirection='column' flexGrow='1' margin='1rem'>
          <h1>Informations de profil</h1>
          <UserProfileInfosList user={user} />
        </Container>
        <Container
          flexDirection='column'
          justifyContent='space-between'
          margin='1rem'
        >
          <Container flexDirection='column'>
            <h1>Modifier le mot de passe</h1>
            <UserProfileModifyPasswordForm />
          </Container>
          <Container>
            <FilledButton
              onClick={() => {
                const confirmBox = window.confirm(
                  'Voulez vous vraiment supprimer votre compte ? cette action est irréversible.'
                );
                if (confirmBox === true) {
                  deleteAccount(userId);
                }
              }}
            >
              Supprimer mon compte
            </FilledButton>
          </Container>
        </Container>
        <Container margin='1rem'>
          <UserBookingList bookings={bookings} />
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
    max-width: 900px;
    min-width: 500px;
    margin: auto;
  }
`;
