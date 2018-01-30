import emp from './employeeData'



export const FETCH_EMPLOYEE = 'FETCH_EMPLOYEE';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

const fetchList = () => {
  return { type: FETCH_EMPLOYEE, payload: emp }
}
 // TODO: prepare rest api 

const deleteEmp = (empId) => ({ type: REMOVE_EMPLOYEE, payload: empId })

const addEmp = (emp) => ({ type: ADD_EMPLOYEE, payload: emp })

export { fetchList, deleteEmp, addEmp };