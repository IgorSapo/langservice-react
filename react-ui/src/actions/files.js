import {
  LOAD_FILES_START,
  LOAD_FILES_SUCCESS,
  LOAD_FILES_FAIL
} from '../types';
import api from '../api';

export const loadFilesStart = () => ({
  type: LOAD_FILES_START
});

export const loadFilesSuccess = files => ({
  type: LOAD_FILES_SUCCESS,
  files
});

export const loadOrderFiles = orderId => dispatch => {
  console.log('In loadGetFiles!');
  // dispatch(loadFilesStart());
  return api.file
    .getOrderFiles(orderId)
    .then(files => dispatch(loadFilesSuccess(files)));
};
