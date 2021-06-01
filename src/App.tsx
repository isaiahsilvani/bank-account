import React from 'react';
import logo from './logo.svg';
import './App.css';
// useDipsatch to use action creators
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state/';
import { useState } from 'react'
import AccountButtons from './components/AccountButtons'

function App() {
  const dispatch = useDispatch()
  // action creator functions
  const { depositMoney, withdrawMoney, multiplyMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)
  // access to current state
  const amount = useSelector((state: State) => state.bank)
  const [input, setInput] = useState({
    query: "",
    account: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget as HTMLInputElement
    const name = element.name
    console.log(name)
    if (input.query && input.account) {
      // save to database at the end of switch when state is changed
      switch (name){
        case "deposit":
          depositMoney(parseInt(input.query),  input.account)
          break; //every action needs it's own type
        case "withdraw":
          withdrawMoney(parseInt(input.query),  input.account)
          break; //every action needs it's own type
        case "multiply":
          multiplyMoney(parseInt(input.query),  input.account)
          break; //every action needs it's own type
        case "bankrupt":  // try putting action.payload here and see the error. That's so cool!
          bankrupt(input.account)
          break; //every action needs it's own type
        default:
          return null
      }
    }
  }

  return (
    <div className="App">
      <div className="bankBox">
        <h1>Your Amount</h1>
        <h3>{amount}</h3>
        {/* When we click on a button we want to use an action creator */}
        <button onClick={handleClick} name="deposit">Deposit</button>
        <button onClick={handleClick} name="withdraw">Withdraw</button>
        <button onClick={handleClick} name="multiply">Multiply</button>
        <button onClick={handleClick} name="bankrupt">Reset</button>
        <br></br>
        <input type='text' name='query' value={input.query} onChange={handleChange} placeholder="value"></input>
        <input type='text' name='account' value={input.account} onChange={handleChange} placeholder="account"></input>
        <br></br>
        <AccountButtons input={input}/>
      </div>
    </div>
  );
}

export default App;
