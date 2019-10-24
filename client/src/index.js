import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// session storage
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

import store from './redux/store';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Router>
	</Provider>,
	document.getElementById('root')
);
