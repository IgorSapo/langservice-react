import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import orders from './orders';

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
  orders,
  form: formReducer
});

export default rootReducer;
