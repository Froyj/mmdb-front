import axios from "axios";

const postHouses = async (imgData, data) => {
  await axios
    .post("http://localhost:5000/upload", imgData)
    .then((images) => {
      axios
        .post("http://localhost:5000/home_to_rent", {
          ...data,
          opening_disponibility: `${data.opening_disponibility}T00:00:00.000Z`,
          closing_disponibility: `${data.closing_disponibility}T00:00:00.000Z`,
          image: {
            principal: `http://localhost:5000/housesImg/${images.data[0].primary}`,
            secondary: images.data[1].secondary.map(
              (imgName) => `http://localhost:5000/housesImg/${imgName}`
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