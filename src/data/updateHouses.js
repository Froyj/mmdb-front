import axios from "../helper/axios-config";

const updateHouses = async (data, id, openingDate, closingDate, imgData, setUpdateHouse) => {
  await axios
    .post("/upload", imgData)
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
        .then((res) => setUpdateHouse(res.data), alert("Maison modifiée !"))

        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
};

export default updateHouses;
