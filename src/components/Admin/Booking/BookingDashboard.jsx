import { useEffect, useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../../helper/axios-config';
import BookingList from './BookingList/BookingList';
import BookingRegistration from './BookingRegistration';
import FilledButton from '../../common/buttons/FilledButton';
import BookingContext from '../../../contexts/Booking/booking';
import { RESET_BOOKING } from '../../../reducers/booking/actions';

const BookingDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const { dispatchBooking } = useContext(BookingContext);
  const toggleBookingForm = () => setIsBookingFormOpen(!isBookingFormOpen);
  const [fieldErrors, setFieldErrors] = useState({});

  function getDetailedBookingList() {
    return axios
      .get('/bookings')
      .then((res) => res.data)
      .then(setBookings)
      .catch(() => {
        toast.error(
          'Il y a eu une erreur pendant la récupération des informations !',
          {
            position: 'top-center',
            autoClose: 2000,
          }
        );
      });
  }

  const deleteBooking = (id) => {
    axios
      .delete(`/bookings/${id}`)
      .then((res) => console.log(res))
      .then(() => setBookings(bookings.filter((b) => b.id !== id)))
      .then(() => {
        toast.success('Réservation supprimée !', {
          position: 'top-center',
          autoClose: 2000,
        });
      })
      .catch(console.log);
  };

  const addBooking = (bookingToAdd) => {
    axios
      .post('/bookings', bookingToAdd)
      .then((res) => res.data)
      .then(getDetailedBookingList)
      .then(() => dispatchBooking({ type: RESET_BOOKING }))
      .then(() => {
        setFieldErrors({})
        toast.success('Réservation crée !', {
          position: 'top-center',
          autoClose: 2000,
        });
      })
      .catch((error) => {
        const errors = error.response.data.details.reduce((carry, current) => {
          const accu = { ...carry };
          console.log(current)
          if (!accu[current.context.label]) {
            accu[current.context.label] = current.message;
          }
          console.log(accu)
          return accu;
        }, {});
        setFieldErrors(errors);
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
          <BookingRegistration
            bookings={bookings}
            addBooking={addBooking}
            fieldErrors={fieldErrors}
          />
        )}
      </div>
    </>
  );
};

export default BookingDashboard;