import { PropTypes } from 'prop-types';
// import { Link } from 'react-router-dom';
import { Row, Cell, ClientInfos } from '../common/tables/Table';
import useBookingBillingDetails from '../../customHooks/useBookingBillingDetails';

const BookingListItem = ({ booking}) => {
  const { bookingTotal } = useBookingBillingDetails(booking);

  BookingListItem.propTypes = {
    booking: PropTypes.shape({
      id: PropTypes.number,
      home_to_rent_id: PropTypes.number,
      arrival_date: PropTypes.string,
      departure_date: PropTypes.string,
      user: PropTypes.objectOf(PropTypes.any),
      total_price: PropTypes.number,
    }).isRequired,
  };

  const {
    home_to_rent: homeToRent,
    arrival_date: arrival,
    departure_date: departure,
    user,
  } = booking;

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('fr-FR');
  }

  if (!booking || !user) {
    return null;
  }

  return (
    <Row>
      <Cell>{homeToRent.name}</Cell>
      <Cell>{formatDate(arrival)}</Cell>
      <Cell>{formatDate(departure)}</Cell>
      <Cell>
        <ClientInfos>
          <span>
            {user.firstname} {user.lastname}
          </span>
          <span>{user.phone}</span>
          <span>{user.email}</span>
        </ClientInfos>
      </Cell>
      <Cell>{bookingTotal} €</Cell>
    </Row>
  );
};

export default BookingListItem;
