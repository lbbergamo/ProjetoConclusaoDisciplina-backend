import GoogleService from '../../../../clients/googleService/index'
import { filterLocation } from './filterLocation'
export async function receiveGeoMaps (address: string): Promise<any> {
  try {
    const { data, status } = await GoogleService.geocode(encodeURI(address))
    if (status !== 200) throw new Error('Erro - receiveGeoMaps')
    return filterLocation(data)
  } catch (error) {
    throw Error('Erro no receiveGeoMaps')
  }
}
