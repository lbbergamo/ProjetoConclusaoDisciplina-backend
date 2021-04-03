import { getAdapter } from '../../common/core/https';

class ClimaTempo {
    static get(params : IClimaTempo): any {
        return getAdapter({
            url: process.env.INFO_CEP_URL,
            parameters: {
                number: params.cep
            }
        })
    }
}
export default ClimaTempo
interface IClimaTempo{
    cep: string
}