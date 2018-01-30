import React from 'react';
import Grommet from 'grommet/components/Grommet';
import Box from 'grommet/components/Box';
import store from './stores';


import { Provider } from 'react-redux';

import { EmpList } from './components/EmployeeList';

const App = (props) => (
    <Grommet>
        <Provider store={store}>
            <Box flex>
                <EmpList />
            </Box>
        </Provider>
    </Grommet>
);

export default App;