import {
  LOAD_ORDERS_START,
  LOAD_ORDERS_SUCCESS,
  LOAD_ORDERS_FAIL
} from '../types';

// const initialState = {
//   isLoading: false,
//   orders: [],
//   errors: null
// };

const orders = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_ORDERS_START:
      return {
        isLoading: true
      };
    case LOAD_ORDERS_SUCCESS:
      return {
        isLoading: false,
        orders: action.orders
      };
    case LOAD_ORDERS_FAIL:
      return {
        isLoading: false
      };
    default:
      return state;
  }
};

export default orders;
