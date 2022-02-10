import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingList from './BookingList';
import axios from '../../helper/axios-config';
import BookingRegistration from './BookingRegistration';
import FilledButton from "../styled-components/SubmitButton";

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
      .then((res) => console.log(res))
      .then(() => setBookings(bookings.filter((b) => b.id !== id)))
      .catch(console.log);
      toast.success("Réservation supprimée !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  };

  return (
      <><ToastContainer/><BookingList bookings={bookings} handleDelete={deleteBooking} /><div>
      <FilledButton onClick={toggleBookingForm} width="20%" backgroundColor="#1c2c46" border="none" fontSize="13.3333px">
        Enregistrer une reservation
      </FilledButton>
      {isBookingFormOpen && <BookingRegistration bookings={bookings} setBookings={setBookings} />}
    </div></>
  );
};

export default BookingDashboard;
