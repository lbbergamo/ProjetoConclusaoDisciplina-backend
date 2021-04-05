import GoogleService from '../../../../clients/googleService/index'
import { filterLocation } from './filterLocation'
export async function receiveGeoMaps (address: string): Promise<any> {
  try {
    const { data } = await GoogleService.geocode(encodeURI(address))
    return filterLocation(data)
  } catch (error) {
    throw Error('Erro no receiveGeoMaps')
  }
}
