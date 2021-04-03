import https from '@core/http';

class request{

    static get(number : string) : any {
        return https.get({
            url: process.env.INFO_CEP_URL,
            parameters: {
                number : 'number'
            }
        })
    }
}

export default request