const { expect } = require('chai');
const request = require('request');

describe(`Index page`, () => {
 it(`GET /`, (done) => {
  const call = {
	  url: 'http://localhost:7865',
	  method: 'GET',
  };
  request(call, (error, response, body) => {
   expect(response.statusCode).to.equal(200);
   expect(body).to.equal('Welcome to the payment system');
   done();
  });
 });
});
