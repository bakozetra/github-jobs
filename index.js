import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContextProvider } from './pages/GlobalContext';

ReactDOM.render(
  <GlobalContextProvider>
    	<Router>
			<App />
		</Router>
  </GlobalContextProvider>
  ,
	document.getElementById('root')
);
