import React from 'react'
import * as api from '../services/api'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, } from '../state/';

// Clean up code by removing query from input field, you just need account
interface AccountButtonsProps {
  input: {
    query: string,
    account: string
  }
}

const AccountButtons: React.FC<AccountButtonsProps> = ({input}) => {
  const dispatch = useDispatch()
  const { setMoney } = bindActionCreators(actionCreators, dispatch)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget as HTMLInputElement
    const name = element.name
    if (input.account) {
      switch (name){
        case "fetch":
          api.fetchRequest(parseInt(input.query), input.account)
          .then(data => {
            if (data){ setMoney(data) }
          })
          break;
        case "delete":
          api.deleteRequest(parseInt(input.query), input.account)
          .then(data => {
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