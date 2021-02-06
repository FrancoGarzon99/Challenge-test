import errorHandler from './ErrorHandler';
import { EditPostReducer, DeletePostReducer } from '../redux/Actions';

let count = 0;
export const EditPost = (post) => (dispatch) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: post.id,
      title: post.title,
      body: post.body,
      userId: 1,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then(() => dispatch(DeletePostReducer(post.id)))
    .then(() => dispatch(EditPostReducer(post)))
    // eslint-disable-next-line no-plusplus
    .then(() => localStorage.setItem('PUT', JSON.stringify(++count)))
    .catch(errorHandler);
};
