type ApiDataType = {
  account: {
    account: string,
    amount: number
  },
  payload: number,
  type: string,
  message: string,
  ApiResults: {

  }
}

type State = EmptyObject & {
  bank: number;
  username: string,
}

type variantColor = {
  variant: string
}