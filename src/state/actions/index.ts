// use enum for abstraction
import { ActionType } from '../action-types/index'


interface DepositAction {
  type: ActionType.DEPOSIT,
  payload: number
}
interface WithdrawAction {
  type: ActionType.WITHDRAW,
  payload: number
}
interface BankruptAction {
  type: ActionType.BANKRUPT
}
// We're saying that the Action is either going to be depo/with/bank action
// Now typescript has everything it need to infer that action contains a payload
export type Action = DepositAction | WithdrawAction | BankruptAction