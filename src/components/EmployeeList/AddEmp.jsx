import React from 'react';
import PropTypes from 'prop-types';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';

class Employee extends React.Component {

  addEmp = () => {
    this.props.addEmp();
  }

  render() {
    const { emp } = this.props;

    return (
      <Form>
        <FormFields>
          <FormField>
              <input type="text" placeholder="empId" />
              <input type="text" placeholder="empId" />
              <input type="text" placeholder="empId" />
              <input type="text" placeholder="empId" />
              <input type="text" placeholder="empId" />
              <input type="text" placeholder="empId" />
              <input type="text" placeholder="empId" />
          </FormField>
        </FormFields>
      </Form>
      /* <ListItem>
        <Box> {emp.empId} </Box>
        <Box> {emp.jobTitleName} </Box>
        <Box> {emp.firstName} </Box>
        <Box> {emp.lastName} </Box>
        <Box> {emp.preferredFullName} </Box>
        <Box> {emp.employeeCode} </Box>
        <Box> {emp.region} </Box>
        <Box> {emp.phoneNumber} </Box>
        <Box> {emp.employeeCode} </Box>
        <Box> {emp.emailAddress} </Box>
      </ListItem> */
    );
  }
}

Employee.defaultProps = {

};

Employee.propTypes = {
  addEmp: PropTypes.func.isRequired,
  deleteEmp: PropTypes.func.isRequired
};

export default Employee;