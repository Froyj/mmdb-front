import styled from 'styled-components';
import useBookingBillingDetails from '../../../customHooks/useBookingBillingDetails';
import { Container, SubSection } from '../../../common/containers';

const GeneralInfos = ({ booking }) => {
  const {
    bookingTotal,
    optionsTotal,
    rentalWithoutFees,
    stayFees,
    houseKeepingFees,
  } = useBookingBillingDetails(booking);

  const {
    arrival_date: arrival,
    departure_date: departure,
    number_of_renter: personCount,
    booking_has_option: options,
  } = booking;

  return (
    <SubSection flexDirection='column'>
      <h3>Informations générales</h3>
      <Container display='flex' flexDirection='row'>
        <Container>
          <table>
            <tr>
              <th>Nombre de personnes</th>
              <td>{personCount}</td>
            </tr>
            <tr>
              <th>Date d'arrivée</th>
              <td>{new Date(arrival).toLocaleDateString('fr')}</td>
            </tr>
            <tr>
              <th>Date de départ</th>
              <td>{new Date(departure).toLocaleDateString('fr')}</td>
            </tr>
          </table>
        </Container>
        <Container>
          {options.length === 0 ? (
            <p>Aucune option</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Quantité</th>
                  <th>Prix à l'unité</th>
                  <th>Prix total</th>
                </tr>
              </thead>
              {options
                .filter((o) => o.quantity !== 0)
                .map(({ quantity, option }) => (
                  <tr key={option.id}>
                    <td>{option.name}</td>
                    <td>{option.price}</td>
                    <td>{quantity}</td>
                    <td>{quantity * option.price} €</td>
                  </tr>
                ))}
            </table>
          )}
        </Container>
      </Container>
      <PriceContainer>
        <h4>Détail de la facturation</h4>
        <table>
          <tr>
            <th>Frais de location</th>
            <td>{rentalWithoutFees}</td>
          </tr>
          <tr>
            <th>Frais de ménage</th>
            <td>{houseKeepingFees} €</td>
          </tr>
          <tr>
            <th>Taxe de séjour</th>
            <td>{stayFees * personCount} €</td>
          </tr>
          <tr>
            <th>Total des options</th>
            <td>{optionsTotal} €</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{bookingTotal} €</td>
          </tr>
        </table>
      </PriceContainer>
    </SubSection>
  );
};

const PriceContainer = styled.div`
  margin: 2em 0;
  padding: 2em 0;
  p {
    font-size: 1.5em;
  }
`;

export default GeneralInfos;
