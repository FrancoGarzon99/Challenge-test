import errorHandler from '../errorHandler';
import { listPost } from '../../../redux/Actions';

export const GetPostApi = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((res) => dispatch(listPost(res)))
    .catch(errorHandler);
};
