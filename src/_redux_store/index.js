/* eslint-disable linebreak-style */
import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import mobiles from './mobiles'

const rootReducer = combineReducers({
	mobiles,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware(), logger],
})
