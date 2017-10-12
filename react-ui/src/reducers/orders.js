import {
  LOAD_ORDERS_START,
  LOAD_ORDERS_SUCCESS,
  LOAD_ORDERS_FAIL,
  LOAD_FILES_START,
  LOAD_FILES_SUCCESS,
  LOAD_FILES_FAIL
} from '../types';

const initialState = {
  isLoading: false,
  orders: [],
  errors: {}
};

const orders = (state = initialState, action = {}) => {
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
    case LOAD_FILES_SUCCESS:
      console.log('In reducer: files loaded!');
      console.log(action.files);
      const orderId = action.files[0].orderId;
      return {
        orders: state.orders.map(
          order =>
            order.id == orderId ? { ...order, files: action.files } : order
        )
      };
    default:
      return state;
  }
};

export default orders;
