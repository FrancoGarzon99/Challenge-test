import { DeletePostReducer } from '../../../redux/Actions';

export const DeletePost = (id) => async (dispatch) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' });
  dispatch(DeletePostReducer(id));
};
