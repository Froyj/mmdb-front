import axios from './axios-config';

const getBookingWithDetails = (bookingId) =>
  axios.get(`/bookings/${bookingId}`).then((res) => res.data);

// eslint-disable-next-line import/prefer-default-export
export { getBookingWithDetails };
