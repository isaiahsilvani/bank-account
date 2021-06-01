import { ActionType } from '../action-types/index'
import { Action } from '../actions/index'

const initialState = 0
// Give the state and action arguments types
// put API calls to backend to store the data in db

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type){
    case ActionType.DEPOSIT:
      return state + action.payload  //every action needs it's own type
    case ActionType.WITHDRAW:
      return state - action.payload  //every action needs it's own type
    case ActionType.MULTIPLY:
      return state * action.payload  //every action needs it's own type
    case ActionType.BANKRUPT:  // try putting action.payload here and see the error. That's so cool!
      return 0
    case ActionType.SET:
      return action.payload
    default:
      return state
  }
}

export default reducer