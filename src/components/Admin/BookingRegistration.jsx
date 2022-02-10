import { useState, useEffect } from 'react';
import getHouses from '../../data/houses';
import AdminBookingForm from './AdminBookingForm';

const BookingRegistration = ({ setBookings, bookings }) => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getHouses(setHouses);
  }, []);

  return (
      <AdminBookingForm
        houses={houses}
        setBookings={setBookings}
        bookings={bookings}
      />
  );
};

export default BookingRegistration;
