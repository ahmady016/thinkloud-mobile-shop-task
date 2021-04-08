import { Switch, Route, Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container'

import Header from './Layout/Header'
import Home from './Pages/Home'
import AddMobile from './Pages/AddMobile'

function App() {
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
