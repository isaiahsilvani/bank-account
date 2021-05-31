import React from 'react'
import * as api from '../services/api'

interface AccountButtonsProps {
  input: {
    query: string,
    account: string
  }
}

const AccountButtons: React.FC<AccountButtonsProps> = ({input}) => {

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(input)
    if (input.query || input.account) {
      console.log('work')
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