/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit'

const mobilesSlice = createSlice({
	name: 'mobiles',
	initialState: {
		list: {},
		filtered: [],
	},
	reducers: {
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

export const actions = { ...mobilesSlice.actions }
export default mobilesSlice.reducer
