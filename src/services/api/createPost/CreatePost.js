import { CreatePostReducer } from '../../../redux/Actions';

export const CreatePost = (newPost) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.body,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then(() => dispatch(CreatePostReducer(newPost)));
};
