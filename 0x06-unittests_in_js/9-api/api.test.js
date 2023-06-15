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

 it(`GET /cart/:id(number)`, (done) => {
  const call = {
	  url: 'http://localhost:7865/cart/12',
          method: 'GET',
  };
  request(call, (error, response, body) => {
   expect(response.statusCode).to.equal(200);
   expect(body).to.equal('Payment methods for cart 12');
   done();
  });
 });

 it(`GET /cart/:id(not number)`, (done) => {
  const call = {
          url: 'http://localhost:7865/cart/number',
          method: 'GET',
  };
  request(call, (error, response, body) => {
   expect(response.statusCode).to.equal(404);
   done();
  });
 });
});
