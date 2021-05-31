import React from 'react'
import * as api from '../services/api'
import { useSelector } from 'react-redux'

interface AccountButtonsProps {
  input: {
    query: string,
    account: string
  }
}

const AccountButtons: React.FC<AccountButtonsProps> = ({input}) => {

  const amount = useSelector((state: State) => state.bank)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget as HTMLInputElement
    const name = element.name
    if (input.query && input.account) {
      switch (name){
        case "save":
          return api.saveRequest(parseInt(amount), input.account)
        case "fetch":
          return api.fetchRequest(parseInt(amount), input.account)
        case "delete":
          return api.deleteRequest(parseInt(amount), input.account)
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