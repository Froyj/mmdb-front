import axios from '../helper/axios-config';

const getHouses = (setVar) => {
  axios
    .get('/home_to_rent')
    .then((response) => response.data)
    .then((data) => setVar(data))
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err))
};

export default getHouses;