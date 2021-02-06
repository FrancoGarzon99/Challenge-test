import { CreatePostReducer } from '../Redux/Actions';

let count = 0;
export const CreatePost = (newPost) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.body,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then(() => dispatch(CreatePostReducer(newPost)))
    // eslint-disable-next-line no-plusplus
    .then(() => localStorage.setItem('POST', JSON.stringify(++count)));
};
