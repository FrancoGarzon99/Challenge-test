import { listPost } from '../../../redux/Actions';

export const GetPostApi = () => async (dispatch) => {
  const urlData = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataJson = await urlData.json();
  dispatch(listPost(dataJson));
};
