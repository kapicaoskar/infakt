import axios from 'axios'
export class Send {
    constructor(apiKey, sandbox) { this.apiKey = apiKey, this.sandbox = sandbox }
    sendToEmail = async (invoiceUUID, email) => {
        if (!invoiceUUID || !this.apiKey || !email) return { response: "noApiKeyOrInvoiceUUIDOrEmail" }
        if (this.sandbox === false) { this.url = `https://api.infakt.pl/api/v3/invoices/${invoiceUUID}/deliver_via_email.json` } else { this.url = `https://api.sandbox-infakt.pl/api/v3/invoices/${invoiceUUID}/deliver_via_email.json` }
        return axios.post(this.url, { "print_type": "original", "recipient": email, "locale": "pl", "send_copy": false }, { headers: { "X-inFakt-ApiKey": this.apiKey } })
            .then(res => {
                if (res.data.error) return { response: "badApiKey" }
                return { response: "sended" }
            })
            .catch(err => { return { response: 'If there was an error with the request and the status code is 401, it is most likely due to an incorrect apiKey or you have not set the sandbox value in the class definition. If the status code is 404, it means that the invoiceUUID is incorrect!', error: err } })
    }
}