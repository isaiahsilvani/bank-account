// This is how our actions are going to always look, so create the type
// {
//   type: string,
//   payload?: number
// }
interface DepositAction {
  type: "deposit",
  payload: number
}
interface WithdrawAction {
  type: "withdraw",
  payload: number
}
interface BankruptAction {
  type: "bankrupt"
}
// We're saying that the Action is either going to be depo/with/bank action
// Now typescript has everything it need to infer that action contains a payload
export type Action = DepositAction | WithdrawAction | BankruptAction