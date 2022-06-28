import axios from "axios/index";

const productApi = {
  async get(businessId) {
    return await axios.get(process.env.REACT_APP_API_ACCESS + '/api/products/' + businessId + '/business');
  },

  async deleteOne(id) {
    return await axios.delete(process.env.REACT_APP_API_ACCESS + '/api/products/' + id)
  },

  async createOne(product) {
    return await axios.post(process.env.REACT_APP_API_ACCESS + '/api/products', product)
  }
}

export default productApi