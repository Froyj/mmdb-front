import { useContext, useEffect, useState } from 'react';
import { fetchUserWithId } from '../api/users';
import Global from '../components/styled-components/theme/Global';
import { UserContext } from '../contexts/user';

function UserProfile() {
  const { userId } = useContext(UserContext);
  const { user, setUser } = useState(null);

  const loadUserData = async (id) => {
    const fetchedUser = await fetchUserWithId(id);
    setUser(fetchedUser)
  };

  useEffect(() => {
    loadUserData(userId);
  }, []);

  return (
    <>
      <Global>Profil Utilisateur</Global>
      <table>
        <tr>
          <td>Nom</td>
          <td>{user.lastname}</td>
        </tr>
        <tr>
          <td>Prénom</td>
          <td>{user.firstname}</td>
        </tr>
        <tr>
          <td>Téléphone</td>
          <td>{user.phone}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{user.email}</td>
        </tr>
        <tr>
          <td>Adresse</td>
          <td>{user.adress}</td>
        </tr>
      </table>
    </>
  );
}

export default UserProfile;
