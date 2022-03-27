import { Container, SubSection } from '../../../common/containers';

const CustomerInfos = ({ customer }) => (
  <SubSection flexGrow='2'>
    <h3>Locataire</h3>
    <table>
      <tr>
        <th>Nom</th>
        <td>
          {customer?.firstname} {customer?.lastname.toUpperCase()}
        </td>
      </tr>
      <tr>
        <th>Email</th>
        <td>{customer?.email}</td>
      </tr>
      <tr>
        <th>Téléphone</th>
        <td>{customer?.phone}</td>
      </tr>
      <tr>
        <th>Adresse</th>
        <td>
          <Container display='flex' flexDirection='column'>
            <span>{customer.adress}</span>
            <span>
              {customer.zipcode} {customer.city}
            </span>
          </Container>
        </td>
      </tr>
    </table>
  </SubSection>
);

export default CustomerInfos;
