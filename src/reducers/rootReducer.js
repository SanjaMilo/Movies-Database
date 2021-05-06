import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import authReducer from './authReducer';
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

// Root Reducer:
const rootReducer = combineReducers({
  movies: searchReducer,
  auth: authReducer,
  firestore: firestoreReducer, // To sync local state with Database
  firebase: firebaseReducer // To sync firebase authentication service with our local state
});

export default rootReducer;