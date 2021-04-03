import axios from 'axios'

export async function getAdapter (options: any): Promise<any> {
  return await axios(options).then(
    async (response) => {
      return response
    },
    async (error) => {
      throw error
    }
  )
}
