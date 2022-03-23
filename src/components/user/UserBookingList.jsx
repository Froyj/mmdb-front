import { Row, Cell, Table, TableHeader, TableBody } from '../common/tables/Table';
import UserBookingListItem from './UserBookingListItem';

const UserBookingList = ({ bookings, handleDelete }) => (
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
      <TableBody>
        {bookings.map((booking) => (
          <UserBookingListItem
            key={booking.id}
            booking={booking}
            handleDelete={() => handleDelete(booking.id)}
          />
        ))}
      </TableBody>
    </Table>
  </div>
);

export default UserBookingList;