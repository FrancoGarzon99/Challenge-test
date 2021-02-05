import { CreatePostReducer } from '../../../redux/Actions';

export const CreatePost = (newPost) => async (dispatch) => {
  await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.body,
      userId: 1,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  dispatch(CreatePostReducer(newPost));
};
