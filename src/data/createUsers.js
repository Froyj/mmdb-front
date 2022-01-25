import axios from "axios";

const createUsers = (data) => {
  axios
    .post("http://localhost:5000/register", {
      ...data,
      birth_date: `${data.birth_date}T00:00:00.000Z`,
    })
    .then((res) => {
      console.log(res);
    })
    .catch(() => {
      alert("cet email est déjà utilisé !");
    });
};

export default createUsers;
