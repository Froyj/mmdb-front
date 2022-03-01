import { useEffect, useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookingList from './BookingList';
import axios from '../../helper/axios-config';
import BookingRegistration from './BookingRegistration';
import FilledButton from '../styled-components/SubmitButton';
import BookingContext from '../../contexts/Booking/booking';
import { RESET_BOOKING } from '../../reducers/booking/actions';

const BookingDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const { dispatchBooking } = useContext(BookingContext);

  const toggleBookingForm = () => setIsBookingFormOpen(!isBookingFormOpen);

  function getDetailedBookingList() {
    axios
      .get('/booking-details')
      .then((res) => res.data)
      .then(setBookings)
      .catch(console.log);
  }

  const deleteBooking = (id) => {
    axios
      .delete(`/bookings/${id}`)
      .then((res) => console.log(res))
      .then(() => setBookings(bookings.filter((b) => b.id !== id)))
      .catch(console.log);
    toast.success('Réservation supprimée !', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const addBooking = (bookingToAdd) => {
    axios
      .post('/bookings', bookingToAdd)
      .then((res) => res.data)
      .then((freshBooking) => {
        setBookings([...bookings, freshBooking]);
      })
      .then(dispatchBooking({ type: RESET_BOOKING }))
      .then(() => {
        toast.success('Réservation crée !', {
          position: 'top-center',
          autoClose: 2000,
        });
      })
      .catch(() => {
        toast.error('Il y a eu une erreur pendant la réservation !', {
          position: 'top-center',
          autoClose: 2000,
        });
      });
  };

  useEffect(() => {
    getDetailedBookingList();
  }, []);

  return (
    <>
      <ToastContainer />
      <BookingList bookings={bookings} handleDelete={deleteBooking} />
      <div>
        <FilledButton
          onClick={toggleBookingForm}
          width='20%'
          backgroundColor='#1c2c46'
          border='none'
          fontSize='13.3333px'
        >
          Enregistrer une reservation
        </FilledButton>
        {isBookingFormOpen && (
          <BookingRegistration bookings={bookings} addBooking={addBooking} />
        )}
      </div>
    </>
  );
};

export default BookingDashboard;
