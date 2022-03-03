import styled from 'styled-components';
import useBookingPrice from '../../../customHooks/useBookingPrice';
import { Container, SubSection } from '../../../common/containers';

const GeneralInfos = ({ booking }) => {
  const totalPrice = useBookingPrice(booking);

  const {
    arrival_date: arrival,
    departure_date: departure,
    number_of_renter: personCount,
    booking_has_option: options,
  } = booking;

  return (
    <SubSection flexDirection='column' flexBasis='100%'>
      <h3>Informations générales</h3>
      <Container display='flex' flexDirection='column'>
        <Container
          display='flex'
          flexDirection='row'
          justifyContent='space-evenly'
          flexBasis='50%'
          flexGrow={2}
        >
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
          <div>
            <h3>Options</h3>
            {options.length === 0 ? (
              <p>Aucune option</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <td>Nom</td>
                    <td>Quantité</td>
                    <td>Prix à l'unité</td>
                    <td>Prix total</td>
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
          </div>
        </Container>
      </Container>
      <PriceContainer>
        <h3>Détail de la facturation</h3>
        <table>
          <tr>
            <th>Frais de location</th>
            <td>{}</td>
          </tr>
          <tr>
            <th>Frais de ménage</th>
            <td>{}</td>
          </tr>
          <tr>
            <th>Frais de location</th>
            <td>{}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{totalPrice} €</td>
          </tr>
        </table>
      </PriceContainer>
    </SubSection>
  );
};

const PriceContainer = styled.div`
  margin: 2em 0;
  padding: 2em 0;
  display: flex;
  h3 {
    font-size: 1.5em;
    margin-right: 1em;
  }
  p {
    font-size: 1.5em;
  }
`;

export default GeneralInfos;
