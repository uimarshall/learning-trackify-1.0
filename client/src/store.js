import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import rootReducer from './reducers';
import defaultProps from './dataStore/defaultProps';
/* eslint-disable no-underscore-dangle */

// const initialState = {};

const middleware = [thunk];
const applied = composeWithDevTools ( applyMiddleware(...middleware) ); //error!
const store = createStore(rootReducer, defaultProps, applied);

// const store = createStore(
//   rootReducer,
//   defaultProps,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   ),
// );

export default store;
