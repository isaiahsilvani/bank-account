import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'http://localhost:1337/api/'

export const saveRequest = async (state: number, action: string) => {

  try {
    const payload = {
      action,
      state
    }
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
  try {
    const payload: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + action
    )
    
    switch(payload.data.message){
      case "Account found":
        // Set the state to the payload's amount
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
  try {
    const payload: AxiosResponse<ApiDataType> = await axios.delete(
      baseUrl + action
    )
    return payload.data
  } catch (error) {
    throw new Error(error)
  }
}