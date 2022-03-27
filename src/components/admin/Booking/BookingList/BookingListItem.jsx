import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Cell, ClientInfos } from '../../../common/tables/Table';
import FilledButton from '../../../common/buttons/FilledButton';
import useBookingBillingDetails from '../../../../customHooks/useBookingBillingDetails';

const BookingListItem = ({ booking, handleDelete }) => {
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
    id,
    home_to_rent: homeToRent,
    arrival_date: arrival,
    departure_date: departure,
    user,
  } = booking;

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('fr-FR');
  }

  if (!booking) {
    return null;
  }

  return (
    <Row>
      <Cell>{homeToRent.name}</Cell>
      <Cell>{formatDate(arrival)}</Cell>
      <Cell>{formatDate(departure)}</Cell>
      <Cell>
        {user ?
        <ClientInfos>
          <span>
            {user.firstname} {user.lastname}
          </span>
          <span>{user.phone}</span>
          <span>{user.email}</span>
        </ClientInfos>
        : 'Utilisateur supprimé'}
      </Cell>
      <Cell>{bookingTotal} €</Cell>
      <Cell noBorder>
        <Link to={`/admin/dashboard/details-reservation/${id}`}>
          Voir les détails
        </Link>
      </Cell>
      <Cell noBorder>
        <FilledButton
          type='button'
          onClick={() => {
            const confirmBox = window.confirm('Voulez vous vraiment supprimer cette réservation ?');
            if (confirmBox === true) {
              handleDelete();
            }
          }}
        >
          Supprimer
        </FilledButton>
      </Cell>
    </Row>
  );
};

export default BookingListItem;
