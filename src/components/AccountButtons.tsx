import React from 'react'
import * as api from '../services/api'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, } from '../state/';
import styled from '@emotion/styled'

// Clean up code by removing query from input field, you just need account

const AccountBlock = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`

const AccountButton = styled.button`
  margin: 0 10px;
  font-size: 1.3em;
  padding: 0.5em 1em;
  border-radius: 10px;
  border: solid black 2px;
  &:hover{
    color: white;
    background-color: darkgrey;
    cursor: pointer;
  }
  &:active{
    background-color: #2E2E2E
  }
`


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
      <AccountBlock>
        <AccountButton onClick={handleClick} name="fetch">Fetch Account</AccountButton>
        <AccountButton onClick={handleClick} name="delete">Delete Account</AccountButton>
      </AccountBlock>
    </div>
  );
}

export default AccountButtons