import axios from '../helper/axios-config';

const getHouses = (setVar) =>
  axios
    .get('/home_to_rent')
    .then((response) => response.data)
    .then((data) => setVar(data));

const updateHouses = async (
  data,
  id,
  openingDate,
  closingDate,
  imgData,
  setUpdateHouse
) => {
  await axios
    .post('/upload', imgData)
    .then((images) => {
      axios
        .put(`/home_to_rent/${id}`, {
          ...data,
          adress: data.adress,
          is_smoker: parseInt(data.is_smoker, 10),
          opening_disponibility: `${openingDate}T00:00:00.000Z`,
          closing_disponibility: `${closingDate}T00:00:00.000Z`,
          image: {
            principal: `/housesImg/${images.data[0].principal}`,
            secondary: images.data[1].secondary.map(
              (imgName) => `/housesImg/${imgName}`
            ),
          },
        })
        .then((res) => setUpdateHouse(res.data))

        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
};

const toggleHouseAvailability = (houseId, availability) =>
  axios.put(`/home_to_rent/${houseId}`, { availability });

export { getHouses, toggleHouseAvailability, updateHouses };
