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
    const savePayload: AxiosResponse<ApiDataType> = await axios.post(baseUrl)
    return savePayload
  } catch (error) {
    throw new Error(error)
  }
}