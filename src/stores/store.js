import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './../reducers';

const logger = (store) => (next) => (action) => {
  console.log('Middlware receive action');
  next(action);
}


const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(logger)));

export default store;
