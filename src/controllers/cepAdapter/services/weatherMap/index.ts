import IWeather from 'src/clients/weather/IWeather'
import WeatherMap from '../../../../clients/weather/index'

export async function receiveWeatherMap (params: IWeather): Promise<any> {
  const { data, status } = await WeatherMap.get(params)
  if (status !== 200) throw new Error(`Erro - receiveWeatherMap - ${status}`)
  return data
}
