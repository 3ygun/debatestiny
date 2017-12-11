import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './store';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
