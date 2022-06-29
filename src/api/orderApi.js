import axios from "axios/index";

const orderApi = {
  async get(businessId) {
    return await axios.get(process.env.REACT_APP_API_ACCESS + '/api/order/' + businessId + '/business');
  },

  async getDetailById(id) {
    return await axios.get(process.env.REACT_APP_API_ACCESS + '/api/order/' + id + '/detail');
  },

  async deleteOne(id) {
    return await axios.delete(process.env.REACT_APP_API_ACCESS + '/api/category/' + id)
  },

  async approveOrder(id) {
    return await axios.put(process.env.REACT_APP_API_ACCESS + '/api/order/' + id + '/approve')
  }
}

export default orderApi