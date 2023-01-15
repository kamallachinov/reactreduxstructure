import React from 'react'
//BUTUN REDUCER LARI BURA IMPORT EDIRIK
// WE COMBINE REDUCERS IN THIS INDEX.JS FILE


import counterReducer from './Counter'
import loggedReducer from './IsLogged'
import { combineReducers } from 'redux'


const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})
export default allReducers;