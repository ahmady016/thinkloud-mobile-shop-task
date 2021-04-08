import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import './index.css'

// seed localStorage with data
import LS from './_helpers/localStorage'
import { MOBILES } from './_helpers/constants'
import mobilesData from './_helpers/mobiles.json'
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
