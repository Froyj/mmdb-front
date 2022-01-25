import axios from '../helper/axios-config';

const getBookings = (setVar) => {

    axios
    .get('/bookings')
    .then((response) => response.data)
    .then((data) => setVar(data))
    .catch((err) => console.log(err))
};

export default getBookings;