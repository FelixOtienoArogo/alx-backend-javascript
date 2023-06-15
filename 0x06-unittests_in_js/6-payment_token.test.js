const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe(`getPaymentTokenFromAPI`, () => {
 it(`Test the result`, (done) => {
  getPaymentTokenFromAPI(true).then((res) => {
   chai.expect(res).to.include({data: 'Successful response from the API' });
   done();
  }).catch((error) => done(error));
 });
});
