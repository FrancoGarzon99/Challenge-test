// Actions to Reducers
const listPost = (payload) => ({
  type: 'LIST_POST',
  payload,
});
const DeletePostReducer = (id) => ({
  type: 'DELETE_POST',
  id,
});
const CreatePostReducer = (newPost) => ({
  type: 'DELETE_POST',
  newPost,
});

// Actions Creators Asincronicas
export const GetPostApi = () => async (dispatch) => {
  const urlData = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataJson = await urlData.json();
  dispatch(listPost(dataJson));
};
export const DeletePost = (id) => async (dispatch) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' });
  dispatch(DeletePostReducer(id));
  // dispatch(GetPostApi());
};
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
  // dispatch(GetPostApi());
};
