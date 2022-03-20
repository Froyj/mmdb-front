import { SubSection } from "../../../common/containers";

const HouseInfos = ({ house }) => (
  <SubSection flexBasis='50%' flexGrow='2'>
    <h3>Location</h3>
    <table>
      <tr>
        <th>Nom de la location</th>
        <td>
          {house.name}
        </td>
      </tr>
      <tr>
        <th>Adresse</th>
        <td>
          {house.adress} {house.zipcode} {house.city}
        </td>
      </tr>
      <tr>
        <th>Heure d'arrivée minimum</th>
        <td>{house.arrival_hour}</td>
      </tr>
      <tr>
        <th>Heure de départ maximum</th>
        <td>{house.departure_hour}</td>
      </tr>
      <tr>
        <th>Capacité</th>
        <td>
          {house.capacity} {house.capacity > 1 ? 'personnes' : 'personne'}
        </td>
      </tr>
      <tr>
        <th>Prix par nuit</th>
        <td>{house.price_by_night} €</td>
      </tr>
    </table>
  </SubSection>
);

export default HouseInfos;
