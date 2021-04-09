import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './__grid.css';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import store from './redux/store/store';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
