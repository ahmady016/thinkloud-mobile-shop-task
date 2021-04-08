import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import LS from './_helpers/localStorage'
import mobilesData from './_helpers/mobiles.json'

import App from './App'
import './index.css'

export const MOBILES = 'mobiles'

// seed localStorage with data
const mobiles = LS.get(MOBILES)
if (!mobiles) LS.set(MOBILES, mobilesData)

render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
