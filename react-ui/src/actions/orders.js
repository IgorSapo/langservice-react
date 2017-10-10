import {
  SUBMIT_ORDER,
  GET_ORDERLIST,
  LOAD_ORDERS_START,
  LOAD_ORDERS_SUCCESS,
  LOAD_ORDERS_FAIL
} from '../types';
import api from '../api';

export const loadOrdersStart = () => ({
  type: LOAD_ORDERS_START
});

export const loadOrdersSuccess = orders => ({
  type: LOAD_ORDERS_SUCCESS,
  orders
});

export const submit = data => dispatch => api.order.submit(data);

export const getOrderList = () => dispatch => {
  console.log('In getOrderList');
  dispatch(loadOrdersStart());
  return api.order
    .getList()
    .then(orders => dispatch(loadOrdersSuccess(orders)));
};
