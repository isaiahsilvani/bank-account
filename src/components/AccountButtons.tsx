import React from 'react'
import * as api from '../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state/';

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
    if (input.query && input.account) {
      switch (name){
        case "save":
          return api.saveRequest(amount, input.account)
        case "fetch":
          api.fetchRequest(parseInt(input.query), input.account)
          
          .then(data => {
            console.log('here is that', typeof data, data)
            setMoney(data)
          })
          break;
        case "delete":
          return api.deleteRequest(parseInt(input.query), input.account)
        default:
          return null
      }
      
    }
  }

  return (
    <div className="accountBtns">
      <button onClick={handleClick} name="save">Save to Account</button>
      <button onClick={handleClick} name="fetch">Fetch from Account</button>
      <button onClick={handleClick} name="delete">Delete Account</button>
    </div>
  );
}

export default AccountButtons