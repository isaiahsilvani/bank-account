import React from 'react';
import logo from './logo.svg';
import './App.css';
// useDipsatch to use action creators
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/';

function App() {

  const dispatch = useDispatch()

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)


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
