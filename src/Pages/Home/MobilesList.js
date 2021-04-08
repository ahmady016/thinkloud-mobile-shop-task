import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DataGrid } from '@material-ui/data-grid'

import { setSelectedMobile } from '../../_redux_store/mobiles'

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
		<div className="w-100 mt-1" style={{ height: 400 }}>
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
		</div>
	)
}

export default MobilesList
