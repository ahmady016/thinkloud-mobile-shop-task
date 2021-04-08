import { createSlice } from '@reduxjs/toolkit'

const mobilesSlice = createSlice({
	name: 'mobiles',
	initialState: {
		list: {},
		filtered: [],
		selected: {},
	},
	reducers: {
		setMobiles: (state, { payload }) => {
			state.list = payload
			state.filtered = Object.values(payload)
		},
		setSelectedMobile: (state, { payload }) => {
			if(payload.id)
				state.selected = state.list[payload.id]
			else
				state.selected = {}
		},
		addMobile: (state, { payload }) => {
			state.list[payload.id] = payload
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
