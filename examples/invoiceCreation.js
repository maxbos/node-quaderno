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
