import styled from 'styled-components';
import FilledButton from '../components/common/buttons/FilledButton';
import Navigation from '../components/layout/Navigation';
import UserProfileModifyPasswordForm from '../components/UserProfileModifyPasswordForm';

function UserProfile() {
  return (
    <>
      <Navigation />
      <Main>
        <h1>Informations de profil</h1>
        <UserProfileInfoList>
          <UserProfileItem>
            <h2>Nom</h2>
            <span>Periot</span>
          </UserProfileItem>
          <UserProfileItem>
            <h2>Prénom</h2>
            <span>Geoffroy</span>
          </UserProfileItem>
          <UserProfileItem>
            <h2>Email</h2>
            <span>geoffroy.periot.dev@gmail.com</span>
          </UserProfileItem>
          <UserProfileItem>
            <h2>Téléphone</h2>
            <span>0677383962</span>
          </UserProfileItem>
          <UserProfileItem>
            <h2>Adresse</h2>
            <span>16 Allees Charles de Fitte</span>
          </UserProfileItem>
          <UserProfileItem>
            <h2>Code Postal</h2>
            <span>31300</span>
          </UserProfileItem>
          <UserProfileItem>
            <h2>Localité</h2>
            <span>Toulouse</span>
          </UserProfileItem>
        </UserProfileInfoList>
        <h1>Modifier le mot de passe</h1>
        <UserProfileModifyPasswordForm />
        <FilledButton>Supprimer mon compte</FilledButton>
      </Main>
    </>
  );
}

export default UserProfile;

const Main = styled.section`
  margin: 0.5rem;
  padding: 1.5em 0;
  h1 {
    font-size: 1.5rem;
  }
  @media (min-width: 596px) {
    max-width: 50%;
    min-width: 500px;
    margin: auto;
  }
`;

const UserProfileInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const UserProfileItem = styled.li`
  list-style: none;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 0.8rem;
  h2 {
    font-size: 1rem;
  }
  span {
    color: #373737;
  }
`;
