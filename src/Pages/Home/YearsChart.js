import React from 'react'
import { useSelector } from 'react-redux'

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts'

import Typography from '@material-ui/core/Typography'

import styled from 'styled-components'
const YearsChartContainer = styled.div`
	width: 100%;
	margin: 1rem 0;
	& h5 {
		margin-bottom: 0.5rem;
	}
`
function YearsChart() {
	const byYear = useSelector((state) => state.mobiles.byYear)
	return (
		<YearsChartContainer>
			<Typography variant="h5">YearsChart</Typography>
			<BarChart width={400} height={300} data={byYear}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="year" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="count" fill="#8884d8" />
			</BarChart>
		</YearsChartContainer>
	)
}

export default YearsChart
