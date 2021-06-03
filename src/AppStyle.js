import styled from '@emotion/styled'
import { css, jsx } from '@emotion/react'

export const Header = styled.div`
  background-color: lightpink;
  font-size: 2.2em;
  font-weight: 600;
  letter-spacing: 0.1em;
  padding: 10px;
`

export const YourBalance = styled.div`
  background-color: lightblue;
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
  background-color: gray;
  height: 100vh
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

export const Buttons = styled.div`
  background-color: lightblue;
  display: flex;
  align-content: center;
  justify-content: space-around;
`

export const InputBlock = styled.div`
  background-color: lightpink;
  display: flex;
  justify-content: center;
`

export const Input = styled.div`
  margin: 10px;
  height: 40px;
`

export const InputStyle = css({
  height: '20px'
})