import React from 'react';
import logo from './logo.svg';
import './App.css';
// useDipsatch to use action creators
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state/';
import { useState } from 'react'

interface Input {
  input: String
}

function App() {

  const dispatch = useDispatch()
  // action creator functions
  const { depositMoney, withdrawMoney, multiplyMoney,bankrupt } = bindActionCreators(actionCreators, dispatch)
  // access to current state
  const amount = useSelector((state: State) => state.bank)
  const [input, setInput] = useState({
    query: ""
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
        <button onClick={() => depositMoney(parseInt(input.query))}>Deposit</button>
        <button onClick={() => withdrawMoney(parseInt(input.query))}>Withdraw</button>
        <button onClick={() => multiplyMoney(parseInt(input.query))}>Multiply</button>
        <button onClick={() => bankrupt()}>Reset</button>
        <input type='text' name='query' value={input.query} onChange={handleChange}></input>
      </div>
    </div>
  );
}

export default App;
