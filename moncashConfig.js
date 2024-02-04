const moncash = require('nodejs-moncash-sdk');

moncash.configure({
  'mode': 'sandbox', // ou 'live' pour la production
  'client_id': 'b8a145619cc6f3934c4e754b4c90bf8b',
  'client_secret': 'oHrr4tbnB1PH0uz6VQNUvYLt9_YeV6qTDsTYE6BUcDjL93YQE63jq9dGR5P0Zddt',
});

module.exports = moncash;
