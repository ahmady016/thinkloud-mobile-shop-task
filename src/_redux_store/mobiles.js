import { createSlice } from '@reduxjs/toolkit'

const mobilesSlice = createSlice({
	name: 'mobiles',
	initialState: {
		list: {},
		filtered: [],
	},
	reducers: {
		setMobiles: (state, { payload }) => {
			state.list = payload
		},
		addMobile: (state, { payload }) => {
			state.list[payload.id] = payload
		},
		searchMobiles: (state, { payload }) => {
			state.filtered = Object.values(state.list).map(
				(mobile) =>
					mobile.model === payload.model && mobile.brand === payload.brand
			)
		},
	},
})

export const { setMobiles, addMobile, searchMobiles } = mobilesSlice.actions
export default mobilesSlice.reducer
