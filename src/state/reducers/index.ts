import { combineReducers } from 'redux'
import bankReducer from './bankReducer'
import accountReducer from './accountReducer'

const reducers = combineReducers({
  bank: bankReducer,
  account: accountReducer
})

export default reducers
// define State Type, this exactly interprets what we want
export type State = ReturnType<typeof reducers>
// interpret whatever type we pass in traingle brackets