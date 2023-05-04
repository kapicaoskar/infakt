import axios from 'axios'
export class Generate {
    constructor(apiKey, sandbox) { this.apiKey = apiKey, this.sandbox = sandbox }
    createInvoice = async (data) => {
        if (!this.apiKey || !data) return { response: "noApiKeyOrData" }
        if (this.sandbox === false) { this.url = "https://api.infakt.pl/v3/invoices.json" } else { this.url = "https://api.sandbox-infakt.pl/api/v3/invoices.json" }
        return axios.post(this.url, data, { headers: { "X-inFakt-ApiKey": this.apiKey } })
            .then(res => {
                if (res.data.error) return { response: "badApiKey" }
                return { created: true, data: res.data }
            })
            .catch(err => { return { response: 'If there was an error with the request and the status code is 401, it is most likely due to an incorrect apiKey or you have not set the sandbox value in the class definition. If the status code is 404, it means that the invoiceUUID is incorrect. If an error code of 422 appears, it indicates that function params may be bad!', error: err } })
    }
}
