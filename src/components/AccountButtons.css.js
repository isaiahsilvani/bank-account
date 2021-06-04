import styled from '@emotion/styled'

export const AccountBlock = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`

export const AccountButton = styled.button`
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