import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './_redux_store'

// seed localStorage with data
import LS from './_helpers/localStorage'
import { MOBILES } from './_helpers/constants'
import mobilesData from './_helpers/mobiles.json'
const mobiles = LS.get(MOBILES)
if (!mobiles) LS.set(MOBILES, mobilesData)

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
