const soap = require('soap');
const constants = require('constants');
const url = 'https://190.215.48.11:8080/WSPortalPFGTD/WSFactoring.asmx?wsdl';

const sslOptions = { strictSSL: false, rejectUnauthorized: false, secureOptions: constants.SSL_OP_NO_TLSv1_2 };

const options = {
  wsdl_options: sslOptions
};

const sslSecurity = new soap.ClientSSLSecurity(
  null,
  null,
  null,
  sslOptions
);

const args = { rutCliente: 71255905 };

soap.createClient(url, options, function (err, client) {
  if (err) return console.error(err);

  client.setSecurity(sslSecurity);

  client.carteraFactoringCliente(args, options, function (err, result) {
    if (err) return console.error('error on result', err);
    console.error(result);
  });
});