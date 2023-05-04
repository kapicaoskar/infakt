import axios from 'axios'
export class Check {
    constructor(apiKey, sandbox) { this.apiKey = apiKey, this.sandbox = sandbox }
    allInvoices = async () => {
        if (!this.apiKey) return { response: "noApiKey" }
        if (this.sandbox === false) { this.url = "https://api.infakt.pl/v3/invoices.json" } else { this.url = "https://api.sandbox-infakt.pl/api/v3/invoices.json" }
        return axios.get(this.url, { headers: { "X-inFakt-ApiKey": this.apiKey } })
            .then(res => {
                if (res.data.error) return { response: "badApiKey" }
                return { finded: true, data: res.data.entities }
            })
            .catch(err => { return { response: 'There was an error with the request, if the status code is 401, most likely the apiKey is incorrect or you did not set the sandbox value in the class definition!', error: err } })
    }
    invoiceById = async (invoiceUUID) => {
        if (!invoiceUUID || !this.apiKey) return { response: "noApiKeyOrInvoiceUUID" }
        if (this.sandbox === false) { this.url = `https://api.sandbox-infakt.pl/api/v3/invoices/${invoiceUUID}.json` } else { this.url = `https://api.sandbox-infakt.pl/api/v3/invoices/${invoiceUUID}.json` }
        return axios.get(this.url, { headers: { "X-inFakt-ApiKey": this.apiKey } })
            .then(res => {
                if (res.data.error) return { response: "badApiKey" }
                return { finded: true, data: res.data }
            })
            .catch(err => { return { response: 'There was an error with the request if status code is 401, it is most likely due to an incorrect apiKey or you have not set the sandbox value in the class definition. If the status code is 404, it means that the UUID is incorrect!', error: err } })
    }
    invoiceStatus = async (invoiceReferenceNumber) => {
        if (!invoiceReferenceNumber || !this.apiKey) return { response: "noApiKeyOrInvoiceReferenceNumber" }
        if (this.sandbox === false) { this.url = `https://api.infakt.pl/api/v3/async/invoices/status/${invoiceReferenceNumber}.json` } else { this.url = `https://api.sandbox-infakt.pl/api/v3/async/invoices/status/${invoiceReferenceNumber}.json` }
        return axios.get(this.url, { headers: { "X-inFakt-ApiKey": this.apiKey } })
            .then(res => {
                if (res.data.error) return { response: "badApiKey" }
                return { finded: true, data: res.data.entities }
            })
            .catch(err => { return { response: 'If there was an error with the request and the status code is 401, it is most likely due to an incorrect apiKey or you have not set the sandbox value in the class definition. If the status code is 404, it means that the reference number is incorrect!', error: err } })
    }
}
