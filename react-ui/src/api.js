import axios from 'axios';

export default {
  order: {
    submit: order => axios.post('/api/orders', order),
    getList: () => axios.get('/api/orders').then(res => res.data)
  },
  file: {
    getOrderFiles: orderId =>
      axios.get(`/api/files?orderId=${orderId}`).then(res => res.data)
  },
  auth: {
    login: ({ username, password }) =>
      axios
        .post(`/api/orders/usertest?username=${username}&password=${password}`)
        .then(res => res.data)
  }
};
