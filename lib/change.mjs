import axios from 'axios'
export class Change {
    constructor(apiKey, sandbox) { this.apiKey = apiKey, this.sandbox = sandbox }
    setInvoiceAsPaid = async (invoiceUUID) => {
        if (!invoiceUUID || !this.apiKey) return { response: "noApiKeyOrInvoiceUUID" }
        if (this.sandbox === false) { this.url = `https://api.infakt.pl/api/v3/invoices/${invoiceUUID}/paid.json` } else { this.url = `https://api.sandbox-infakt.pl/api/v3/invoices/${invoiceUUID}/paid.json` }
        return axios.post(this.url, {}, { headers: { "X-inFakt-ApiKey": this.apiKey } })
            .then(res => {
                if (res.data.error) return { response: "badApiKey" }
                return { response: "markedAsPaid" }
            })
            .catch(err => { return { response: 'If there was an error with the request and the status code is 401, it is most likely due to an incorrect apiKey or you have not set the sandbox value in the class definition. If the status code is 404, it means that the invoiceUUID is incorrect. If an error code of 422 appears, it indicates that the invoice has already been paid!', error: err } })
    }
    deleteInvoice = async (invoiceUUID) => {
        if (!invoiceUUID || !this.apiKey) return { response: "noApiKeyOrInvoiceUUID" }
        if (this.sandbox === false) { this.url = `https://api.infakt.pl/api/v3/invoices/${invoiceUUID}.json` } else { this.url = `https://api.sandbox-infakt.pl/api/v3/invoices/${invoiceUUID}.json` }
        return axios.delete(this.url, { headers: { "X-inFakt-ApiKey": this.apiKey } },)
            .then(res => {
                if (res.data.error) return { response: "badApiKey" }
                return { response: "deleted" }
            })
            .catch(err => { return { response: 'If there was an error with the request and the status code is 401, it is most likely due to an incorrect apiKey or you have not set the sandbox value in the class definition. If the status code is 404, it means that the invoiceUUID is incorrect!', error: err } })
    }
}
