import { useEffect, useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../helper/axios-config';
import BookingList from '../../components/Admin/Booking/BookingList/BookingList';
import BookingRegistration from '../../components/Admin/Booking/BookingRegistration';
import FilledButton from '../../components/common/buttons/FilledButton';
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
      .catch(() => {
        toast.error('Il y a eu une erreur pendant la récupération des informations !', {
          position: 'top-center',
          autoClose: 2000,
        });
      });
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
      .then(getDetailedBookingList)
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