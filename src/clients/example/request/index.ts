import https from '@core/https'

class ExampleRequest {
    private url = 'http://example.com';
    private token = 'example-token'; // nunca deixar exporto no codigo
    private authtoken = 'example-auth'; // nunca deixar exposto no codigo
    
    handler(parameters: string, parametersTwo: string): any {
        const request = https.request({
            url: this.url,
            type: 'GET',
            data: {
                parameters: parameters,
                parametersTwo: parametersTwo
            }
        })
    }

}