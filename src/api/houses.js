import axios from '../helper/axios-config';

const getHouses = (setVar) =>
  axios
    .get('/home_to_rent')
    .then((response) => response.data)
    .then((data) => setVar(data));

const updateHouse = async ({ data, id, openingDate, closingDate }) => {
  const updateData = {
    ...data,
    adress: data.adress,
    is_smoker: parseInt(data.is_smoker, 10),
    opening_disponibility: `${openingDate}T00:00:00.000Z`,
    closing_disponibility: `${closingDate}T00:00:00.000Z`,
  };

  delete updateData.home_equipment;
  delete updateData.home_option;
  delete updateData.home_activity;
  delete updateData.booking;
  
  return axios.put(`/home_to_rent/${id}`, updateData);
};

const updateHouseImages = (id, imgData) => axios.post(`/home-update/${id}/upload-photos`, imgData);

const toggleHouseAvailability = (houseId, availability) =>
  axios.put(`/home_to_rent/${houseId}`, { availability });

export { getHouses, toggleHouseAvailability, updateHouse, updateHouseImages };
