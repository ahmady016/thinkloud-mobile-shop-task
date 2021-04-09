import { createSlice } from '@reduxjs/toolkit'

import getChartValues from '../_helpers/getChartValues'
import { MOBILES } from '../_helpers/constants'
import LS from '../_helpers/localStorage'

const mobilesSlice = createSlice({
	name: 'mobiles',
	initialState: {
		list: null,
		filtered: null,
		selected: null,
		byYear: null,
		byBrand: null,
	},
	reducers: {
		setMobiles: (state, { payload }) => {
			state.list = payload
			state.filtered = Object.values(payload)
			state.byYear = getChartValues(payload, 'manufacture_year', 'year')
			state.byBrand = getChartValues(payload, 'brand', 'brand')
		},
		setSelectedMobile: (state, { payload }) => {
			if (payload.id) state.selected = state.list[payload.id]
			else state.selected = null
		},
		addMobile: (state, { payload }) => {
			state.list[payload.id] = payload
			state.filtered = Object.values(state.list)
			LS.set(MOBILES, state.list)
		},
		searchMobiles: (state, { payload }) => {
			state.filtered = Object.values(state.list).filter(
				(mobile) =>
					mobile.model === payload.model && mobile.brand === payload.brand
			)
		},
	},
})

export const {
	setMobiles,
	setSelectedMobile,
	addMobile,
	searchMobiles,
} = mobilesSlice.actions

export default mobilesSlice.reducer
