import React from 'react'
import { useSelector } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Alert from '@material-ui/lab/Alert'
import { deepOrange } from '@material-ui/core/colors'

import styled from 'styled-components'
const MobileInfoContainer = styled.div`
	width: 100%;
	margin-top: 4rem;
	margin-bottom: 1rem;
  & h5 {
    margin: 1rem 0;
  }
	& div.MuiAvatar-root {
		width: 70px;
		height: 70px;
		background-color: ${deepOrange[500]};
	}
	& div.MuiCardHeader-content span {
		font-size: 1.2rem;
	}
	& p {
		font-size: 1rem;
	}
`

function MobileInfo() {
	const mobile = useSelector((state) => state.mobiles.selected)
	return (
		<MobileInfoContainer>
			<Typography variant="h5">Selected Mobile Info</Typography>
			{mobile ? (
				<Card>
					<CardHeader
						title={mobile.model}
						subheader={mobile.brand}
						avatar={<Avatar alt={mobile.brand}>{mobile.brand}</Avatar>}
					/>
					<CardContent>
						<p>Year: {mobile.manufacture_year}</p>
						<p>Memory: {mobile.memory}</p>
						<p>Color: {mobile.color}</p>
						<p>Screen Size: {mobile.screen}"</p>
					</CardContent>
				</Card>
			) : (
				<Alert severity="error">
					Please Select A Mobile From Mobiles List ...
				</Alert>
			)}
		</MobileInfoContainer>
	)
}

export default MobileInfo
