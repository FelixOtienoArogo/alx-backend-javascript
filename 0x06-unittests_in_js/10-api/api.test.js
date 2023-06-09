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
          url: 'http://localhost:7865/cart/10',
          method: 'GET',
  };
  request(call, (error, response, body) => {
   expect(response.statusCode).to.equal(200);
   expect(body).to.equal('Payment methods for cart 10');
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

 it(`POST /login`, (done) => {
  const call = {
          url: 'http://localhost:7865/login',
          method: 'POST',
	  json: {
		  userName: 'Betty',
	  },
  };
  request(call, (error, response, body) => {
   expect(response.statusCode).to.equal(200);
   expect(body).to.equal('Welcome Betty');
   done();
  });
 });

it(`POST /login`, (done) => {
  const call = {
          url: 'http://localhost:7865/available_payments',
          method: 'GET',
  };
  request(call, (error, response, body) => {
   expect(response.statusCode).to.equal(200);
   expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
   done();
  });
 });
});
