import axios from '../helper/axios-config';

const fetchUserWithId = (userId) =>
  axios.get(`/users/${userId}`).then((response) => response.data);

const updateUser = (userId, formData) =>
  axios.put(`/users/${userId}`, formData).then((res) => res.data);

const deleteUser = (userId) => axios.delete(`/users/${userId}`);

export { fetchUserWithId, updateUser, deleteUser };
