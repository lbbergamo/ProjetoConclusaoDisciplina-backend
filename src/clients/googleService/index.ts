/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { getAdapter } from './../../common/core/https'

class GoogleService {
  async geocode (address: string): Promise <any> {
    return await getAdapter({
      url: process.env.GOOGLE_URL_GEOCODE + `json?address=${address}&key=` + process.env.GOOGLE_KEY
    })
  }
}

export default new GoogleService()
