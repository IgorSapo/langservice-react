import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from '../types';
import api from '../api';

export const login = credentials => dispatch => {
  console.log('In login thunk!');
  return api.auth.login(credentials);
};
