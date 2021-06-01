import { ActionType } from '../action-types/index'
import { Action } from '../actions/index'
import * as api from '../../services/api';

const initialState = 0
// Give the state and action arguments types
// put API calls to backend to store the data in db

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type){
    case ActionType.DEPOSIT:

      const sum = state + action.payload
      api.saveRequest(sum, action.account)
      return state + action.payload  //every action needs it's own type

    case ActionType.WITHDRAW:
      const dif = state - action.payload
      api.saveRequest(dif, action.account)
      return state - action.payload  //every action needs it's own type

    case ActionType.MULTIPLY:
      const product = state * action.payload
      api.saveRequest(product, action.account)
      return state * action.payload  //every action needs it's own type

    case ActionType.BANKRUPT:
      api.saveRequest(0, action.account)  // try putting action.payload here and see the error. That's so cool!
      return 0

    case ActionType.SET:
      return action.payload

    default:
      return state
  }
}

export default reducer