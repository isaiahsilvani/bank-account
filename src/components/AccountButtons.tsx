import React from 'react'
import * as api from '../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state/';

// Clean up code by removing query from input field, you just need account
interface AccountButtonsProps {
  input: {
    query: string,
    account: string
  }
}

const AccountButtons: React.FC<AccountButtonsProps> = ({input}) => {
  const dispatch = useDispatch()
  const amount = useSelector((state: State) => state.bank)
  const { setMoney } = bindActionCreators(actionCreators, dispatch)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget as HTMLInputElement
    const name = element.name
    if (input.account) {
      switch (name){
        case "fetch":
          api.fetchRequest(parseInt(input.query), input.account)
          .then(data => {
            console.log('here is that', typeof data, data)
            if (data){ setMoney(data) }
          })
          break;
        case "delete":
          api.deleteRequest(parseInt(input.query), input.account)
          .then(data => {
            console.log(data)
            if (data){ setMoney(0) }
          })
          break
        default:
          return null
      }
      
    }
  }

  return (
    <div className="accountBtns">
      <button onClick={handleClick} name="fetch">Fetch Account</button>
      <button onClick={handleClick} name="delete">Delete Account</button>
    </div>
  );
}

export default AccountButtons