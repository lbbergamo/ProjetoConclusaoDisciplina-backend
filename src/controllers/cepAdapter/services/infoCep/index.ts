/* eslint-disable @typescript-eslint/restrict-template-expressions */
import InfoCep from '../../../../clients/infoCep/index'

export async function receiveCep (numberCep: string): Promise<any> {
  const { data, status } = await InfoCep.get(numberCep)
  if (data.code !== 200) throw new Error(`Erro - receiveCep - ${data.code} - ${data.message}`)
  const result: IInfoCep = data.result
  return {
    addressFormat: `${result.logradouro} ${result.bairro} ${result.localidade} ${result.uf}`,
    data: result,
    response: data,
    statusCode: status
  }
}

interface IInfoCep {
  logradouro: string
  bairro: string
  localidade: string
  uf: string
  cep: string
}
