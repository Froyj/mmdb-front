import { useEffect, useState } from 'react';
import BookingList from './BookingList';
import axios from '../../helper/axios-config';
import BookingRegistration from './BookingRegistration';

const BookingDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const toggleBookingForm = () => setIsBookingFormOpen(!isBookingFormOpen);

  function getDetailedBookingList() {
    axios
      .get('/booking-details')
      .then((res) => res.data)
      .then(setBookings)
      .catch(console.log);
  }
  useEffect(() => {
    getDetailedBookingList();
  }, []);

  const deleteBooking = (id) => {
    axios
      .delete(`/bookings/${id}`)
      .then(() => alert('reservation supprimée'))
      .then(() => setBookings(bookings.filter((b) => b.id !== id)))
      .catch(console.log);
  };

  return (
    <section>
      <BookingList bookings={bookings} handleDelete={deleteBooking} />
      <div>
        <button type='button' onClick={toggleBookingForm}>
          Enregistrer une reservation
        </button>
        {isBookingFormOpen && <BookingRegistration bookings={bookings} setBookings={setBookings} />}
      </div>
    </section>
  );
};

export default BookingDashboard;
