import React from 'react';
import logo from './logo.svg';
import './App.css';
// useDipsatch to use action creators
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state/';
import { useState } from 'react'

function App() {

  const dispatch = useDispatch()
  // action creator functions
  const { depositMoney, withdrawMoney, multiplyMoney,bankrupt } = bindActionCreators(actionCreators, dispatch)
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
  console.log(amount)

  return (
    <div className="App">
      <div className="bankBox">
        <h1>Your Amount</h1>
        <h3>{amount}</h3>
        {/* When we click on a button we want to use an action creator */}
        <button onClick={() => depositMoney(parseInt(input.query), input.account)}>Deposit</button>
        <button onClick={() => withdrawMoney(parseInt(input.query),  input.account)}>Withdraw</button>
        <button onClick={() => multiplyMoney(parseInt(input.query),  input.account)}>Multiply</button>
        <button onClick={() => bankrupt(input.account)}>Reset</button>
        <input type='text' name='query' value={input.query} onChange={handleChange} placeholder="value"></input>
        <input type='text' name='account' value={input.account} onChange={handleChange} placeholder="account"></input>
      </div>
    </div>
  );
}

export default App;
