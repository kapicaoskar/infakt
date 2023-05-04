# inFakt

You want to use inFakt API in the simplest way? Then download this module!


## Installation

Install infakt with npm

```bash
npm install infakt
```

## How to use

Examples of inFakt module usage

#### Generate option

```js
import { Generate } from "infakt"
const generate = new Generate("inFakt API Key", true/false) // true and false is sandbox option
const result = await generate.createInvoice({  // your own JSON data based on your preferences if you want more examples go to inFakt API Docs and see on your own what you can add here
    "invoice": {
        "payment_method": "cash",
        "client_company_name": "Upik#3993",
        "client_first_name": "Pani",
        "client_last_name": "Przykład",
        "client_business_activity_kind": "self_employed",
        "client_street": "Uliczna",
        "client_street_number": "1",
        "client_flat_number": "2",
        "client_city": "Miastowo",
        "client_post_code": "11-111",
        "client_tax_code": "9452121681",
        "client_country": "PL",
        "services": [
            {
                "name": "Przykładowa Usługa",
                "net_price": 16623,
                "pkwiu": "84.11.12.0",
                "unit_net_price": 6623,
                "tax_symbol": 23
            }
        ]
    }
})
```



#### Check options

```js
import { Check } from "infakt"
const check = new Check("inFakt API Key", true/false) // true and false is sandbox option
const allInvoices = await check.allInvoices() // returns all invoices created on your API key
const invoiceById = await check.invoiceById("invoice UUID") // returns invoice data based on UUID of invoice
const invoiceStatus = await check.invoiceStatus("invoice Reference Number") // return invoice status of creation
```



#### Change options

```js
import { Change } from "infakt"
const change = new Change("inFakt API Key", true/false) // true and false is sandbox option
const isPaid = change.setInvoiceAsPaid("invoice UUID") // sets invoice as paid
const deleteInvoice = change.deleteInvoice("invoice UUID") // deletes invoice from inFakt
```



#### Send option

```js
import { Send } from "infakt"
const send = new Send("inFakt API Key", true/false) // true and false is sandbox option
const sendToMail = send.sendToEmail("invoice UUID", "email") // sends email with invoice as PDF to mail
```


## inFakt Documentation
https://docs.infakt.pl/


## Author
Oskar Kapica https://github.com/kapicaoskar
