# node-quaderno
Unofficial node.js client for the [Quaderno API][api-docs]

## About
You can use the Quaderno API to access all Quaderno features, designed around the idea
of making tax management and invoicing easy for small businesses.

## Installation

### Node

Install with npm:

```sh
npm install node-quaderno --save
```

## Getting started

To start, you need an instance of `Quaderno` configured with your personal Quaderno account name and private api key:
```js
const Quaderno = require('quaderno');
const quaderno = new Quaderno({
  accountName: '<YOUR_QUADERNO_ACCOUNT_NAME>',
  privateApiKey: '<YOUR_QUADERNO_PRIVATE_API_KEY>',
});
```

### Tax calculation
```js
quaderno.taxes.calculate({
  country: 'NL',
})
  .then((tax) => {
    console.log(tax);
  })
  .catch((error) => {
    console.log(error);
  });
```

### Invoice creation

```js
const Quaderno = require('quaderno');

const quaderno = new Quaderno({
  accountName: '<YOUR_QUADERNO_ACCOUNT_NAME>',
  privateApiKey: '<YOUR_QUADERNO_PRIVATE_API_KEY>',
});

const CONTACT = {
  kind: 'person',
  first_name: 'John',
  last_name: 'Doe',
  email: 'john@johndoe.com',
  country: 'NL',
};

async function invoiceCreation() {
  try {
    const tax = await quaderno.taxes.calculate({
      country: CONTACT.country,
    });
    const invoice = await quaderno.invoices.create({
      contact: CONTACT,
      currency: 'EUR',
      items_attributes: [{
        description: 'An arbitrary product',
        quantity: 1.0,
        unit_price: 99.0,
        tax_1_name: tax.name,
        tax_1_rate: tax.rate,
        tax_1_country: tax.country,
      }],
    });
    console.log(invoice);
  } catch (err) {
    console.error(err);
  }
}

invoiceCreation();
```

[api-docs]: https://quaderno.io/docs/api/
