import axios from "../helper/axios-config";

const deleteHouses = (id) => {
  axios
    .delete("/home_to_rent", { data: { id } })
    .then(() => {
      alert("Maison supprimée !");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default deleteHouses;