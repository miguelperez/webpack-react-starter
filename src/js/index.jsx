import * as React from 'react';
import * as ReactDOM from 'react-dom';

// adding redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// loading application
import {App} from './components/app';

import reducers from './reducers'

// declaring store
const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
