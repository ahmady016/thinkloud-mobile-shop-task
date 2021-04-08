import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container'

import Header from './Layout/Header'
import Home from './Pages/Home'
import AddMobile from './Pages/AddMobile'

import { useDispatch } from 'react-redux'
import _ from 'lodash'
import { setMobiles } from './_redux_store/mobiles'
import LS from './_helpers/localStorage'
import { MOBILES } from './_helpers/constants'
import mobilesSeed from './_helpers/mobiles.json'

function App() {
	// seed localStorage and redux store with data
	const dispatch = useDispatch()
	React.useEffect(() => {
		const existedMobiles = LS.get(MOBILES)
		if (!existedMobiles) {
			let _mobiles = _.mapKeys(mobilesSeed, 'id')
			LS.set(MOBILES, _mobiles)
			dispatch(setMobiles(_mobiles))
		} else {
			dispatch(setMobiles(existedMobiles))
		}
	}, [dispatch])

	return (
		<>
			<Header />
			<Container maxWidth="lg">
				<Switch>
        <Route path="/home" component={Home} />
					<Route path="/add-mobile" component={AddMobile} />
					<Redirect to="/home" />
				</Switch>
			</Container>
		</>
  )
}

export default App
