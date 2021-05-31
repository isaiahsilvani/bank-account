import axios, { AxiosResponse } from 'axios'
import { Action } from '../state/actions/index'

const baseUrl: string = 'http://localhost:1337/api/'

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
    console.log('returned payload', payload.data.message)
    switch(payload.data.message){
      case "Account found":
        return console.log('account found')
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
  try {
    const payload: AxiosResponse<ApiDataType> = await axios.delete(
      baseUrl + action
    )
    return payload
  } catch (error) {
    throw new Error(error)
  }
}