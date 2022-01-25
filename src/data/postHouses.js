import axios from "axios";

const postHouses = async (imgData, data) => {
  await axios
    .post("/upload", imgData)
    .then((images) => {
      axios
        .post("/home_to_rent", {
          ...data,
          opening_disponibility: `${data.opening_disponibility}T00:00:00.000Z`,
          closing_disponibility: `${data.closing_disponibility}T00:00:00.000Z`,
          image: {
            principal: `/housesImg/${images.data[0].primary}`,
            secondary: images.data[1].secondary.map(
              (imgName) => `/housesImg/${imgName}`
            ),
          },
        })
        .then(() => {
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