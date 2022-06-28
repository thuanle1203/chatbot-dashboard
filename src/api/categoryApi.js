import axios from "axios/index";

const categoryApi = {
  async get(businessId) {
    return await axios.get(process.env.REACT_APP_API_ACCESS + '/api/category/' + businessId + '/business');
  },

  async deleteOne(id) {
    return await axios.delete(process.env.REACT_APP_API_ACCESS + '/api/category/' + id)
  },

  async createOne(category) {
    return await axios.post(process.env.REACT_APP_API_ACCESS + '/api/category/', category)
  }
}

export default categoryApi