import axios from "../helper/axios-config"

class AuthController {
  static  authenticate(credentials) {
    return axios
    .post("/auth/login", credentials)
    .then((res) => res.data)
  }

  static register(data) {
    return axios
    .post('/auth/register', {
      ...data,
      birth_date: `${data.birth_date}T00:00:00.000Z`,
      hashed_password: data.password,
    })
  }
}

export default AuthController;