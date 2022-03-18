import axiosDefault from 'axios';

const axios = axiosDefault.create({
  baseURL: process.env.REACT_APP_API_URL,
});


export default axios;

