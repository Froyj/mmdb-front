import { useState, useEffect } from 'react';
import { getHouses } from '../../../api/houses';
import AdminBookingForm from './BookingForm/AdminBookingForm';

const BookingRegistration = ({ addBooking, bookings, fieldErrors }) => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    getHouses(setHouses);
  }, []);

  return (
    <AdminBookingForm
      houses={houses}
      addBooking={addBooking}
      bookings={bookings}
      fieldErrors={fieldErrors}
    />
  );
};

export default BookingRegistration;
