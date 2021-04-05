import InfoCep from '../../../../clients/infoCep/index'

export async function receiveCep (numberCep: string): Promise<any> {
  try {
    const { data, status } = await InfoCep.get(numberCep)
    const result: IInfoCep = data.result
    return {
      addressFormat: `${result.logradouro} ${result.bairro} ${result.localidade} ${result.uf}`,
      data: result,
      response: data,
      statusCode: status
    }
  } catch (error) {
    throw new Error('Erro receive Cep')
  }
}

interface IInfoCep{
  logradouro: string
  bairro: string
  localidade: string
  uf: string
  cep: string
}

/***
 * Falta realizar o tratamento de recepção
 */
