import axios from 'axios';

const getBookings = (setVar) => {

    axios
    .get('http://localhost:5000/bookings')
    .then((response) => response.data)
    .then((data) => setVar(data))
    .catch((err) => console.log(err))
};

export default getBookings;