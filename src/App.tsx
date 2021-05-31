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
  const state = useSelector((state: State) => state.bank)

  return (
    <div className="App">
      <div className="bankBox">
        <h1>Your Amount</h1>
        <h3>0</h3>
        {/* When we click on a button we want to use an action creator */}
        <button>Deposit</button>
        <button>Withdraw</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;
