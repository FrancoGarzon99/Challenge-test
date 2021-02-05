import errorHandler from '../errorHandler';
import { DeletePostReducer } from '../../../redux/Actions';

export const DeletePost = (id) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' })
    .then(() => dispatch(DeletePostReducer(id)))
    .catch(errorHandler);
};
