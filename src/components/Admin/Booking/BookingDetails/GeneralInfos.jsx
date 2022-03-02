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
        <Container display='flex' flexDirection='row' justifyContent='space-evenly'>
          <table>
            <tr>
              <th>Nombre de personnes</th>
              <td>{personCount}</td>
            </tr>
            <tr>
              <th>Date d'arrivée</th>
              <td>{arrival}</td>
            </tr>
            <tr>
              <th>Date de départ</th>
              <td>{departure}</td>
            </tr>
          </table>
          <div>
            <h3>Options</h3>
            {options.length === 0 ? (
              <p>Aucune option</p>
            ) : (
              <ul>
                {options.map(({ quantity, option }) => (
                  <li key={option.id}>
                    {option.name} X {quantity} = {quantity * option.price} €
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
        <div>
          <h3>Total à payer :</h3>
          <p>{totalPrice}</p>
        </div>
      </Container>
    </SubSection>
  );
};

export default GeneralInfos;
