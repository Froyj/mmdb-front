import axios from '../helper/axios-config';

const fetchUserWithId = (userId) =>
  axios.get(`/users/${userId}`).then((response) => response.data);

const createUsers = (data) => {
  axios
    .post('/register', {
      ...data,
      birth_date: `${data.birth_date}T00:00:00.000Z`,
      hashed_password: data.password,
    })
    .catch(() => {
      alert('cet email est déjà utilisé !');
    });
};

export { fetchUserWithId, createUsers };
