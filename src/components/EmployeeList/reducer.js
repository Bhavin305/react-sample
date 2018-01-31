import * as empAction from './actions';
// import { initialState } from './../../stores';
// import { * as store } from './../../stores';
// TODO: import intialState from store folder and set it in default state on line no-7 and identify issue.

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
