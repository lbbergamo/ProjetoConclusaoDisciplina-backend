/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Request, Response } from 'express'
import { receiveWeatherMap } from './services/weatherMap'
import { receiveGeoMaps } from './services/geoMaps/index'
import { receiveCep } from './services/infoCep/index'
class CepAdapter {
  async post (req: Request, res: Response): Promise<Response> {
    try {
      const { cep } = req.body
      if (cep.toString().length < 8) return res.status(400).json({ message: 'Invalid request' })
      const { addressFormat, data: Endereco } = await receiveCep(cep.toString().replace('-', ''))
      const { lat, lng } = await receiveGeoMaps(addressFormat)
      const { weather, main } = await receiveWeatherMap({ lat, lng })
      const result = {
        CEP: cep,
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
      return res.json(result)
    } catch (error) {
      return res.status(400).json({ message: error.message, erro: error })
    }
  }
}

export default CepAdapter
