// Inicializamos el initialState
/*eslint-disable*/
let requestGET = 0;
let requestPost = 0;
// const requestPut = 0;
let requestDELETE = 0;

const initialState = {
  listPost: [],
  peticionesGet: requestGET,
  peticionesPost: 0,
  peticionesDelete: requestDELETE,
  peticionesPut: 0,
};
// Creamos nuestros reducers
const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_POST':
      return {
        ...state,
        listPost: action.payload,
        peticionesGet: ++requestGET,
      };
    case 'CREATE_POST':
      return {
        ...state,
        listPost: state.listPost.concat(action.newPost),
        peticionesPost: ++requestPost,
      };
    case 'DELETE_POST':
      return {
        ...state,
        listPost: state.listPost.filter((p) => p.id !== action.id),
        peticionesDelete: ++requestDELETE,
      };
    default:
      return state;
  }
};
export default Reducers;
