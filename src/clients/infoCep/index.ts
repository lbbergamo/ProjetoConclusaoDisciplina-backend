/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { getAdapter } from './../../common/core/https'

class InfoCep {
  async get (number: string): Promise <any> {
    return await getAdapter({
      url: process.env.INFO_CEP_URL + `?cep=${number}`
    })
  }
}

export default new InfoCep()
