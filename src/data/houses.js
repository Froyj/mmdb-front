import axios from 'axios';

const getHouses = (setVar) => {
    axios
    .get('http://localhost:5000/home_to_rent')
    .then((response) => response.data)
    .then((data) => setVar(data))
    .catch((err) => console.log(err))
};

export default getHouses;