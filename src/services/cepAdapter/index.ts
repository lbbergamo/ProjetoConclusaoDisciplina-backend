import { request, Request, Response } from 'express'
import InfoCep from '../../clients/infoCep/index'
import ClimaTempo from '../../clients/climaTempo/index'
class CepAdapter {
  async post (req: Request, res: Response): Promise<Response> {
    const numberCep = req.params.numberCep;
    const infoCep = InfoCep.get(numberCep);
    const climaTempo = ClimaTempo.get({cep:infoCep.numberCep});
    const result = {
      statusCode: '200',
      CEP: '11040-010',
      Endereco: {
        logradouro: 'Rua Alexandre Fleming',
        bairro: 'Aparecida',
        localidade: 'Santos',
        uf: 'SP',
        cep: '11040010'
      },
      tempo: {
        status: 'chovendo',
        temperatura: '23'
      },
      googleMaps: {
        latitude: '-23.9736663',
        longitude: '-46.3105719'
      }
    }
    return res.json(result).status(200)
  }
}

export default CepAdapter
