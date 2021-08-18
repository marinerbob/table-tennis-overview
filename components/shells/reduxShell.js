import React from 'react';
import { Provider } from 'react-redux';

import store from 'reduxConfig/store';

const reduxShell = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);
export default reduxShell;