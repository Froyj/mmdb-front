import axios from "axios";

const deleteHouses = (id) => {
    axios
      .delete("http://localhost:5000/home_to_rent", {
        data: {
          id,
        },
      })
      .then(() => {
        console.log("house deleted");
      })
      .catch((err) => {
        console.log(err);
      });
    }

export default deleteHouses;      