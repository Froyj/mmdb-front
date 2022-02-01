import axios from "../helper/axios-config";

const postHouses = async (
  imgData,
  data,
  openingDate,
  closingDate,
  setPostedHouse
) => {
  await axios
    .post("/upload", imgData)
    .then((images) => {
      axios
        .post("/home_to_rent", {
          ...data,
          adress: data.adress,
          opening_disponibility: `${openingDate}T00:00:00.000Z`,
          closing_disponibility: `${closingDate}T00:00:00.000Z`,
          is_smoker: parseInt(data.is_smoker, 10),
          image: {
            principal: `/housesImg/${images.data[0].primary}`,
            secondary: images.data[1].secondary.map(
              (imgName) => `/housesImg/${imgName}`
            ),
          },
        })
        .then((res) => {
          setPostedHouse(res.data);
          alert("Maison ajoutée !");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postHouses;
