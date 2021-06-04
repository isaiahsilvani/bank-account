import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'

export const Header = styled.div`
  background-color: #CD1409;
  color: white;
  font-size: 2.2em;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding-top: 10px;
`

export const YourBalance = styled.div`
  background: rgb(255,255,0);
  margin-top: -15px;
  color: white;
  background: rgb(255,255,0);
  background: linear-gradient(0deg, rgba(255,255,0,1) 19%, rgba(205,20,9,1) 28%);
  padding: 0.5em;
  font-weight: 500;
  font-size: 2em
`

export const Balance = styled.div`
  background-color: white;
  margin: 0.6em;
  font-size: 3em;
  padding: 0.1em;
  border-radius: 25px;
  border: solid black 2px;
`

export const Background = styled.div`
  background-color: #ffff00;
  height: 100vh;
`

export const Button = styled.button`
  font-size: 2.2em;
  font-weight: 900;
  padding: 15px;
  text-align: center;
  margin: 10px 0;
  height: 1.8em;
  width: 1.8em;
  border-radius: 25px;
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

export const Red = styled.div`
background: rgb(255,255,0);
background: linear-gradient(0deg, rgba(255,255,0,1) 10%, rgba(205,20,9,1) 39%);
`

export const Buttons = styled.div`
  background: rgb(205,20,9);
  background: linear-gradient(0deg, rgba(205,20,9,1) 30%, rgba(255,255,0,1) 75%);
  display: flex;
  align-content: center;
  justify-content: space-around;
`

export const InputBlock = styled.div`
  display: flex;
  justify-content: center;
`

export const HowTo = styled.div`
  background: rgb(255,255,0);
  background: linear-gradient(0deg, rgba(255,255,0,1) 5%, rgba(205,20,9,1) 42%);
  justify-content: center;
  display: flex;
  width: 60%;
  margin-top: 1em;
  padding-bottom: 10px;
  height: 100px;
  width: 100%;
`

export const P = styled.span`
  margin: 8px;
`

export const TextBlock = styled.div`
  background-color: white;
  text-align: left;
  padding: 10px;
  border-radius: 30px;
  border: 2px solid black;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Bottom = styled.div`
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0.8799076212471132) 95%, rgba(205,20,9,1) 100%);
  height: 40vh;
  width: 100%;
`

export const Input = styled.div`
  margin: 10px;
  height: 40px;
`
