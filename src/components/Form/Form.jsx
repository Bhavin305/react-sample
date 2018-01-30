import React from 'react';
import Box from 'grommet/components/Box';


class Form extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            name: ''
        };
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    render () {
        return (
            <Box>
                <input type="text" onChange={this.handleChange}/>
                Hello  : {this.state.name}
            </Box>
        )
    }
}

export default Form;