import axios from "../helper/axios-config";

const updateHouses = (data, id, setUpdateHouse, openingDate, closingDate) => {
  axios
    .put(`/home_to_rent/${id}`, {
      ...data,
      adress: data.adress,
      is_smoker: parseInt(data.is_smoker, 10),
      opening_disponibility: `${openingDate}T00:00:00.000Z`,
      closing_disponibility: `${closingDate}T00:00:00.000Z`,
    })
    .then((res) => setUpdateHouse(res.data), alert("Maison modifiée !"))

    .catch((err) => console.log(err));
};

export default updateHouses;
