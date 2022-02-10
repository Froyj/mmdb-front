import { PropTypes } from 'prop-types';
import { Row, Cell, ClientInfos } from './styled-components';

const BookingListItem = ({ booking, handleDelete }) => {
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
    home_to_rent_id: homeId,
    arrival_date: arrival,
    departure_date: departure,
    user,
    total_price: price,
  } = booking;

  
  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('fr-FR');
  }
  
  if(!booking || !user) {
    return null
  }

  return (
    <Row>
      <Cell>{homeId}</Cell>
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
      <Cell>{price}</Cell>
      <Cell>
        <button type='button' onClick={handleDelete}>
          Supprimer
        </button>
      </Cell>
    </Row>
  );
};

export default BookingListItem;
