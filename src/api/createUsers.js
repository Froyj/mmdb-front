import axios from "../helper/axios-config";

const createUsers = (data) => {
  axios
    .post("/auth/register", {
      ...data,
      birth_date: `${data.birth_date}T00:00:00.000Z`,
      hashed_password: data.password
    })
    .then()
    .catch(() => {
      alert("cet email est déjà utilisé !");
    });
};

export default createUsers;
