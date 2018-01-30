import { connect } from 'react-redux';

import EmployeeList from './EmployeeList';
import { fetchList } from './actions';

const mapStateToProps = state => ({
  employees: state.employees
});

const mapDispatchToProps = dispatch => ({
  fetchList: () => dispatch(fetchList())
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);