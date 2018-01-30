import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'grommet/components/ListItem';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';


class Employee extends React.Component {

  deleteEmp = () => {
    this.props.deleteEmp(this.props.empId);
  }

  render() {
    const { emp } = this.props;

    return (
      <ListItem justify='between'
      separator='horizontal'>
        <Box> {this.props.empId} </Box>
        <Box> {this.props.jobTitleName} </Box>
        <Box> {this.props.firstName} </Box>
        <Box> {this.props.lastName} </Box>
        <Box> {this.props.preferredFullName} </Box>
        <Box> {this.props.employeeCode} </Box>
        <Box> {this.props.region} </Box>
        <Box> {this.props.phoneNumber} </Box>
        <Box> {this.props.employeeCode} </Box>
        <Box> {this.props.emailAddress} </Box>
        <Button label='Delete'
          onClick={this.deleteEmp} />
      </ListItem>
    );
  }
}

Employee.propTypes = {
  empId: PropTypes.string.isRequired,
  jobTitleName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  preferredFullName: PropTypes.string.isRequired,
  employeeCode: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  deleteEmp: PropTypes.func.isRequired
};

export default Employee;