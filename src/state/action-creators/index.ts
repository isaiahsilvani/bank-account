import { ActionType } from "../action-types"
import { Dispatch } from "redux"    // use Dispatch type from redux to please typescript
import { Action } from '../actions/index'
// action creators are functions that dispatch actions
export const depositMoney = (amount: number, account: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
      account
    })
  }
}

export const setAccount = (account: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SETUSERNAME,
      account
    })
  }
}

export const withdrawMoney = (amount: number, account: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
      account
    })
  }
}

export const multiplyMoney = (amount: number, account: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MULTIPLY,
      payload: amount,
      account
    })
  }
}

export const bankrupt = (account: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
      account
    })
  }
}

export const setMoney = (payload: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET,
      payload
    })
  }
}