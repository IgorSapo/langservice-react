import axios from 'axios';

export default {
  order: {
    submit: order => axios.post('/api/orders', order),
    getList: () => axios.get('/api/orders').then(res => res.data)
  }
};
