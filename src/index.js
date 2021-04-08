import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './_redux_store'

import App from './App'
import './index.css'


render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
