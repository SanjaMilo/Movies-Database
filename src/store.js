import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/rootReducer';
// added for the firebase (and add property to thunk -> .withExtraArgument({getFirebase}) )
import { getFirebase } from 'react-redux-firebase';

const middleware = [thunk.withExtraArgument({ getFirebase })];
const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;

