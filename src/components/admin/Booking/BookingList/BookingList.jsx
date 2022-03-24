import styled from 'styled-components';
import { Row, Cell, Table, TableHeader, TableBody } from '../../../common/tables/Table';
import BookingListItem from './BookingListItem';

const BookingList = ({ bookings, handleDelete }) => (
  <BookingListContainer>
    <h2>Mes réservations</h2>
    <Table minWidth='800px'>
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
          <BookingListItem
            key={booking.id}
            booking={booking}
            handleDelete={() => handleDelete(booking.id)}
          />
        ))}
      </TableBody>
    </Table>
  </BookingListContainer>
);

const BookingListContainer = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
`

export default BookingList;