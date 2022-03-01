import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getBookingWithDetails } from '../../api/bookings';
import Navigation from '../../components/Navigation';

const BookingDetails = () => {
  const { bookingId } = useParams();
  const [bookingWithDetails, setBookingDetails] = useState({ toto: 'toto' });
  
  useEffect(() => {
    const fetchBooking = async (id) => {
      setBookingDetails(await getBookingWithDetails(id))
    }
    fetchBooking(bookingId);
  }, []);

  return (
    <>
      <Navigation />
      <div>
        <p>Hello {bookingWithDetails.toto}</p>
      </div>
    </>
  );
};

export default BookingDetails;
