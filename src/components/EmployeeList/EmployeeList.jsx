import React from 'react';
import PropTypes from 'prop-types';
import List from 'grommet/components/List';
import Employee from './employeeContainer';


class EmployeeList extends React.Component {

  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    const { employees } = this.props;

    return (
      <List> {
        employees && employees.map((emp) => <Employee {...emp} key={emp.empId}/>)
      }
      </List>
    );
  }
}

EmployeeList.defaultProps = {
  employees: []
};

EmployeeList.propTypes = {
  fetchList: PropTypes.func.isRequired,
  employees: PropTypes.array
};

export default EmployeeList;