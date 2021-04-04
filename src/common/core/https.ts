import axios from 'axios'

export async function getAdapter (options: IResquest): Promise<any> {
  return await axios({
    method: 'GET',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    url: options.url
  }).then(
    async (response) => {
      return {
        data: response.data,
        ...response
      }
    },
    async (error) => {
      // console.log(error)
      throw error
    }
  )
}

interface IResquest{
  url: string
  json?: Object
}
