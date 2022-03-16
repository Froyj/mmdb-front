import styled from 'styled-components';
import FilledButton from '../components/common/buttons/FilledButton';
import UserProfileModifyPasswordForm from '../components/UserProfileModifyPasswordForm';
import UserProfileInfosList from '../components/UserProfileInfosList';
import Container from '../components/common/containers/Container';

function UserProfile() {
  return (
    <>
      <Main>
        <Container flexDirection='column' flexGrow='1' margin='1rem'>
          <h1>Informations de profil</h1>
          <UserProfileInfosList />
        </Container>
        <Container flexDirection='column' justifyContent="space-between" margin='1rem'>
          <Container flexDirection='column'>
            <h1>Modifier le mot de passe</h1>
            <UserProfileModifyPasswordForm />
          </Container>
          <Container>
            <FilledButton>Supprimer mon compte</FilledButton>
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
