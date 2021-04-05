import IWeather from 'src/clients/weather/IWeather'
import WeatherMap from '../../../../clients/weather/index'

export async function receiveWeatherMap (params: IWeather): Promise<any> {
  return await WeatherMap.get(params)
}
