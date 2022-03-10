const UserInfosTable = ({ user }) => (
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
);

export default UserInfosTable;
