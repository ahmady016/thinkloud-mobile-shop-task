import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Typography from '@material-ui/core/Typography'
import { DataGrid } from '@material-ui/data-grid'
import { deepPurple } from '@material-ui/core/colors'

import { setSelectedMobile } from '../../_redux_store/mobiles'

import styled from 'styled-components'
const MobilesListContainer = styled.div`
	width: 100%;
	height: 62vh;
	margin: 1rem 0;
	& h5 {
		margin-bottom: 0.5rem;
	}
	& div.MuiDataGrid-main div.MuiDataGrid-colCellWrapper {
		background-color: ${deepPurple[500]} !important;
		color: #fff !important;
	}
	& div.MuiDataGrid-row {
		cursor: pointer;
	}
	& div.MuiDataGrid-row.Mui-selected,
	& div.MuiDataGrid-row.Mui-selected:hover {
		background-color: ${deepPurple[100]};
	}
`

const columns = [
	{ field: 'brand', headerName: 'Brand', type: 'string', width: 300 },
	{ field: 'model', headerName: 'Model', type: 'string', width: 300 },
	{
		field: 'manufacture_year',
		headerName: 'Year',
		type: 'string',
		width: 200,
	},
]

function MobilesList() {
	const mobiles = useSelector((state) => state.mobiles.filtered)
	const dispatch = useDispatch()
	return (
		<MobilesListContainer>
			<Typography variant="h5">Mobile List</Typography>
			<DataGrid
				columns={columns}
				rows={mobiles}
				pageSize={5}
				hideFooterSelectedRowCount
				onRowSelected={({ data, isSelected }) => {
					isSelected
						? dispatch(setSelectedMobile({ id: data.id }))
						: dispatch(setSelectedMobile({ id: undefined }))
				}}
			/>
		</MobilesListContainer>
	)
}

export default MobilesList
