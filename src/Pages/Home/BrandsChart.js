import React from 'react'
import { useSelector } from 'react-redux'

import { PieChart, Pie, Cell } from 'recharts'

import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import { PIE_COLORS } from '../../_helpers/constants'
const BrandsChartContainer = styled.div`
	width: 100%;
	margin-top: 2rem;
  margin-bottom: 1rem;
	& h5 {
		margin-bottom: 0.5rem;
	}
  & g.recharts-layer.recharts-pie {
    transform: scale(1.5)
  }
  & text {
    font-size: 0.5rem;
    font-weight: 700;
  }
`

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
  brand
}) => {
  console.log("🚀: BrandsChart.js => brand", brand)
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)
	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}% ${brand}`}
		</text>
	)
}

function BrandsChart() {
	const byBrand = useSelector((state) => state.mobiles.byBrand)
	return (
		<BrandsChartContainer>
			<Typography variant="h5">BrandsChart</Typography>
			<PieChart width={400} height={400}>
				<Pie
					data={byBrand}
					cx={100}
					cy={100}
					outerRadius={80}
					labelLine={false}
					legendType="circle"
					dataKey="count"
					fill="#8884d8"
          label={renderCustomizedLabel}
				>
					{byBrand.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={PIE_COLORS[index % PIE_COLORS.length]}
						/>
					))}
				</Pie>
			</PieChart>
		</BrandsChartContainer>
	)
}

export default BrandsChart
