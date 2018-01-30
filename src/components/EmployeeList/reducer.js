import * as empAction from './actions';

// Sample reducer example 
// TODO: Fix Add and Remove action
const empReducer = (state = [], action) => {
  let nextState = state;
  switch (action.type) {
    case empAction.ADD_EMPLOYEE: {
      // return {...}
    }
    case empAction.FETCH_EMPLOYEE: {
      nextState.concat(action.payload);
      nextState = action.payload;
    }
    case empAction.REMOVE_EMPLOYEE: {
      // return {...}
    }

  }
  return nextState;
}

export default empReducer;