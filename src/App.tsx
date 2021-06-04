import React from 'react';
import './App.css';
// useDipsatch to use action creators
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state/';
import { useState } from 'react'
import styles from './styles/input.module.css'
import AccountButtons from './components/AccountButtons'
import { P, TextBlock, HowTo, InputBlock, Balance, YourBalance, Header, Background, Buttons, Button, Red, Bottom } from './AppStyle'



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
      <Background>
        <div>
          <Header>Bank Account</Header>
            <YourBalance>Your Balance</YourBalance>
            <Balance>{amount}</Balance>
          {/* When we click on a button we want to use an action creator */}
          <Buttons>
            <Button onClick={handleClick} name="deposit">+</Button>
            <Button onClick={handleClick} name="withdraw">-</Button>
            <Button onClick={handleClick} name="multiply">*</Button>
            <Button onClick={handleClick} name="bankrupt">x</Button>
          </Buttons>
          <Red>
          <br></br>
          <InputBlock>
            <input className={styles.input} type='text' name='query' value={input.query} onChange={handleChange} placeholder="value"></input>
            <input className={styles.input} type='text' name='account' value={input.account} onChange={handleChange} placeholder="account"></input>
          </InputBlock>
          <br></br>
          <AccountButtons input={input}/>
          <HowTo>
              <TextBlock>
                <h4>How to use this app</h4>
                <P>1. Input an account name, select a value, and then an operation. </P>
                <P>2. Accounts are automatically created. Use Fetch Account to get an account's balance.</P>
                <P>3. Deleting an account will delete it's record from the database.</P>
                <P>4. An account name must be inputted to update the balance.</P>
              </TextBlock>
          </HowTo>
          </Red>
        </div>
      </Background>
    </div>
  );
}

export default App;
