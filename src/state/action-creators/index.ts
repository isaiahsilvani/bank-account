import { ActionType } from "../action-types"
import { Dispatch } from "redux"    // use Dispatch type from redux to please typescript
import { Action } from '../actions/index'
// action creators are functions that dispatch actions
const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount
    })
  }
}

const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount
    })
  }
}

const bankrupt = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    })
  }
}