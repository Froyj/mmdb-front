import styled from 'styled-components';
import Container from './common/containers/Container';

const UserProfileInfosList = ({user}) => (
  <UserProfileInfoList>
    <Container justifyContent='space-between'>
      <UserProfileItem>
        <h2>Nom</h2>
        <span>{user.lastname}</span>
      </UserProfileItem>
      <UserProfileItem>
        <h2>Prénom</h2>
        <span>{user.firstname}</span>
      </UserProfileItem>
    </Container>
    <UserProfileItem>
      <h2>Email</h2>
      <span>{user.email}</span>
    </UserProfileItem>
    <UserProfileItem>
      <h2>Téléphone</h2>
      <span>{user.phone}</span>
    </UserProfileItem>
    <UserProfileItem>
      <h2>Adresse</h2>
      <span>{user.adress}</span>
    </UserProfileItem>
    <Container justifyContent='space-between'>
      <UserProfileItem>
        <h2>Code Postal</h2>
        <span>{user.zipcode}</span>
      </UserProfileItem>
      <UserProfileItem>
        <h2>Localité</h2>
        <span>{user.city}</span>
      </UserProfileItem>
    </Container>
  </UserProfileInfoList>
);

export default UserProfileInfosList;

const UserProfileInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 300px;
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
