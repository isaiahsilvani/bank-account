import axios, { AxiosResponse } from 'axios'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../state';
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../state/store'

const baseUrl: string = 'http://localhost:1337/api/'

interface SetMoney {
  SetMoney: object,
  type: string,
  amount: number
}

export const saveRequest = async (state: number, action: string) => {

  try {
    const payload = {
      action,
      state
    }
    console.log(payload)
    const savePayload: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl,
      payload
      )
    return savePayload
  } catch (error) {
    throw new Error(error)
  }
}

export const fetchRequest = async (state: number, action: string) => {
  // get the name, return the amount if it's in the database
  console.log('fetch frontend', state, action)
  try {
    const payload: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + action
    )
    
    switch(payload.data.message){
      case "Account found":
        // Set the state to the payload's amount
        console.log('account found client api')
        // THIS FIXED THE "null" IS NOT ASSIBNABLE TO "number" yes!!!!
        return await payload.data.account.amount as any
      case "No account found":
        return console.log('No account found')
      default:
        return null
    }
  } catch (error) {
    throw new Error(error)
  }
}

// get the name and delete the account if it's in the database
export const deleteRequest = async (state: number, action: string) => {
  console.log(state, action)
  console.log(baseUrl + action)
  try {
    const payload: AxiosResponse<ApiDataType> = await axios.delete(
      baseUrl + action
    )
    console.log('payload from client api', payload.data)
    return payload.data
  } catch (error) {
    throw new Error(error)
  }
}