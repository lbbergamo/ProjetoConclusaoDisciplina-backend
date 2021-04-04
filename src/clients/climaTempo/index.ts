/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { getAdapter } from './../../common/core/https'
class ClimaTempo {
  async get (params: IClimaTempo): Promise<any> {
    return await getAdapter({
      url: process.env.CLIMA_TEMPO_URL + '/api/v1/flood/risk?latitude=' + params.lat + '&longitude=' + params.lng + '?token=' + process.env.CLIMA_TEMPO_TOKEN
    })
  }
}
export default new ClimaTempo()
interface IClimaTempo{
  lat: string
  lng: string
}
