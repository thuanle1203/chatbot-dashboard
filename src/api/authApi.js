import axios from "axios/index";

const authApi = {
  async login(username, password) {
    return await axios.post(process.env.REACT_APP_API_ACCESS + '/api/auth/login', { username, password });
  },

  async signup(userInfor) {
    return await axios.post(process.env.REACT_APP_API_ACCESS + '/api/auth/signup', userInfor);
  },
}

export default authApi