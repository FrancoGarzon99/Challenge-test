/* eslint-disable no-plusplus */
import errorHandler from './ErrorHandler';
import { DeletePostReducer } from '../Redux/Actions';

let count = 0;
export const DeletePost = (id) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' })
    .then(() => dispatch(DeletePostReducer(id)))
    .then(() => localStorage.setItem('DELETE', JSON.stringify(++count)))
    .catch(errorHandler);
};
