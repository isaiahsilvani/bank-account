import { combineReducers } from 'redux'
import bankReducer from './bankReducer'

const reducers = combineReducers({
  bank: bankReducer
})

export default reducers
// define State Type, this exactly interprets what we want
export type State = ReturnType<typeof reducers>
// interpret whatever type we pass in traingle brackets