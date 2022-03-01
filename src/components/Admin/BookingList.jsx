import { Row, Cell, Table, TableHeader } from './styled-components';
import BookingListItem from './BookingListItem';

const BookingList = ({ bookings, handleDelete }) => (
  <div>
    <h2>Mes réservations</h2>
    <Table>
      <TableHeader>
        <Row>
          <Cell>Location</Cell>
          <Cell>Date d'arrivée</Cell>
          <Cell>Date de départ</Cell>
          <Cell>Client</Cell>
          <Cell>Coût de la réservation</Cell>
          <Cell> </Cell>
        </Row>
      </TableHeader>
      <tbody>
        {bookings.map((booking) => (
          <BookingListItem
            key={booking.id}
            booking={booking}
            handleDelete={() => handleDelete(booking.id)}
          />
        ))}
      </tbody>
    </Table>
  </div>
);

export default BookingList;