import axios from "axios";

const updateHouses = (data, id) => {
  axios
    .put(`/home_to_rent/${id}`, {
      ...data,
      opening_disponibility: `${data.opening_disponibility}T00:00:00.000Z`,
      closing_disponibility: `${data.closing_disponibility}T00:00:00.000Z`,
    })
    .then(() => alert("Maison modifiée !"))

    .catch((err) => console.log(err));
};

export default updateHouses;
