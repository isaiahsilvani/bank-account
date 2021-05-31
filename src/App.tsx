import React from 'react';
import logo from './logo.svg';
import './App.css';
// useDipsatch to use action creators
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state/';


function App() {

  const dispatch = useDispatch()
  // action creator functions
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)
  // access to current state
  const amount = useSelector((state: State) => state.bank)
  console.log(amount)

  return (
    <div className="App">
      <div className="bankBox">
        <h1>Your Amount</h1>
        <h3>{amount}</h3>
        {/* When we click on a button we want to use an action creator */}
        <button onClick={() => depositMoney(1000)}>Deposit</button>
        <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
        <button onClick={() => bankrupt()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
