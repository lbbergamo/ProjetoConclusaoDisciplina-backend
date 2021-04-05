/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { getAdapter } from '../../common/core/https'
import IWeather from './IWeather'
class Weather {
  async get (params: IWeather): Promise<any> {
    return await getAdapter({
      url: process.env.WEATHER_URL + '?lat=' + params.lat + '&lon=' + params.lng + '&appid=' + process.env.WEATHER_TOKEN + '&lang=pt_br&units=metric'
    })
  }
}
export default new Weather()
