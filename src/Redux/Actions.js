// Actions to Reducers
export const listPost = (payload) => ({
  type: 'LIST_POST',
  payload,
});
export const DeletePostReducer = (id) => ({
  type: 'DELETE_POST',
  id,
});
export const CreatePostReducer = (newPost) => ({
  type: 'CREATE_POST',
  newPost,
});
export const EditPostReducer = (post) => ({
  type: 'EDIT_POST',
  post,
});
