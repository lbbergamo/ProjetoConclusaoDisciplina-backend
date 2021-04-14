/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Request, Response } from 'express'
import { receiveWeatherMap } from './services/weatherMap'
import { receiveGeoMaps } from './services/geoMaps/index'
import { receiveCep } from './services/infoCep/index'
class CepAdapter {
  async post (req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body
      const { addressFormat, data: Endereco } = await receiveCep(body.cep)
      const { lat, lng } = await receiveGeoMaps(addressFormat)
      const request = await receiveWeatherMap({ lat, lng })
      const { weather, main } = request.data
      const result = {
        Endereco,
        tempo: {
          status: weather[0].description,
          temperatura: main.temp
        },
        googleMaps: {
          latitude: lat,
          longitude: lng
        }
      }
      return res.json(result).status(200)
    } catch (error) {
      return res.json({ message: error.message, erro: error }).status(500)
    }
  }
}

export default CepAdapter
