import errorHandler from '../errorHandler';
import { listPost } from '../../../redux/Actions';

let count = 0;
export const GetPostApi = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((res) => dispatch(listPost(res)))
    // eslint-disable-next-line no-plusplus
    .then(() => localStorage.setItem('GETS', JSON.stringify(++count)))
    .catch(errorHandler);
};
