import { connect } from 'react-redux';

import Employee from './Employee';
import { deleteEmp, addEmp } from './actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  deleteEmp: (empId) => dispatch(deleteEmp(empId)),
  addEmp: (emp) => dispatch(addEmp(emp))
});

export default connect(mapStateToProps, mapDispatchToProps)(Employee);