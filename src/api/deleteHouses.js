import axios from "../helper/axios-config";

const deleteHouses = (id) =>
  axios
    .delete("/home_to_rent", { data: { id } })

export default deleteHouses;
