// use enum for abstraction
import { ActionType } from '../action-types/index'

interface DepositAction {
  type: ActionType.DEPOSIT,
  payload: number,
  account: string
}
interface WithdrawAction {
  type: ActionType.WITHDRAW,
  payload: number,
  account: string
}
interface MultiplyAction {
  type: ActionType.MULTIPLY,
  payload: number,
  account: string
}
interface ApiAction {
  type: string,
  payload: number,
  account: string
}
interface BankruptAction {
  type: ActionType.BANKRUPT,
  account: string
}
interface SetAction {
  type: ActionType.SET,
  payload: null | number | void
}
interface SetUsernameAction {
  type: ActionType.SETUSERNAME,
  account: string;
}
// We're saying that the Action is either going to be depo/with/bank action
// Now typescript has everything it need to infer that action contains a payload
export type Action = DepositAction | WithdrawAction | MultiplyAction | BankruptAction | ApiAction | SetAction | SetUsernameAction
