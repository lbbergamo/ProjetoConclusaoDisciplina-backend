import axios from 'axios'

export const request = async function request (options: any): Promise<any> {
  return await axios(options).then(
    async (response) => {
      return response
    },
    async (error) => {
      throw error
    }
  )
}
