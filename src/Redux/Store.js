import { createStore, applyMiddleware, compose } from 'redux'; // ApplyMiddleware es el metodo que nos ayuda a activar el middleware al realizar nuestras acciones!
import thunk from 'redux-thunk'; // Thunk sirve para realizar acciones asincronicas! en nuestras actions creators
import Reducer from './Reducers';

// Creamos nuestro store pasandole nuestros reducers y lo exportamos para poder usarlo!
const composeEnhancers = compose;
const Store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));
export default Store;
