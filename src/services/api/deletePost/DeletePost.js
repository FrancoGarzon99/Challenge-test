/* eslint-disable no-plusplus */
import errorHandler from '../errorHandler';
import { DeletePostReducer } from '../../../redux/Actions';

let count = 0;
export const DeletePost = (id) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' })
    .then(() => dispatch(DeletePostReducer(id)))
    .then(() => localStorage.setItem('DELETES', JSON.stringify(++count)))
    .catch(errorHandler);
};
