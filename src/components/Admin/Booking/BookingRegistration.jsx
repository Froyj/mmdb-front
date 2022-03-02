import { useState, useEffect } from 'react';
import getHouses from '../../../data/houses';
import AdminBookingForm from './BookingForm/AdminBookingForm';

const BookingRegistration = ({ addBooking, bookings }) => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    getHouses(setHouses);
  }, []);

  return (
      <AdminBookingForm
        houses={houses}
        addBooking={addBooking}
        bookings={bookings}
      />
  );
};

export default BookingRegistration;
