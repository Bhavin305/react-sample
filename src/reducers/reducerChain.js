import { combineReducers } from 'redux';

import { reducer as empsReducer } from '../components/EmployeeList';

const reducers = {
  employees: empsReducer
};

export default combineReducers(reducers);