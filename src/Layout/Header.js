import React from 'react'

import { useHistory } from 'react-router'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

function Header() {
	const history = useHistory()
	const goToHome = React.useCallback((e) => history.push('/home'), [history])
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="menu"
					onClick={goToHome}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">Think Loud Mobile Shop</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Header
