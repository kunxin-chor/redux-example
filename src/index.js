import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider} from 'react-redux'

// For testing the store and action
import store from './store/index'
import { addCustomer} from './actions/index'

// Just for testing in the console
// window.store = store;
// window.addCustomer = addCustomer

ReactDOM.render(
<Provider>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
