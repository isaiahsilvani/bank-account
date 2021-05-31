const initialState = 0
// Give the state and action arguments types
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
type Action = DepositAction | WithdrawAction | BankruptAction

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type){
    case "deposit":
      return state + action.payload  //every action needs it's own type
    case "withdraw":
      return state - action.payload  //every action needs it's own type
    case "bankrupt":
      return 0
    default:
      return state
  }
}


export default reducer