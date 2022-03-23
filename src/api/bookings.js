import axios from '../helper/axios-config';

const getBookings = (setVar) => {
  axios
    .get('/bookings')
    .then((response) => response.data)
    .then((data) => setVar(data))
    .catch((err) => console.log(err));
};

const getUserBookings = (userId) =>
  axios.get(`/bookings?user=${userId}`).then((response) => response.data);

export { getBookings, getUserBookings };
