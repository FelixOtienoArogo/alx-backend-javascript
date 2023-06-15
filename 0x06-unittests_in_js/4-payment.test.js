const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('check if the stub called with SUM, a = 100 and b = 20 and correct output', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    const spy = sinon.spy(console, 'log');
    stub.returns(10);
    sendPaymentRequestToApi(100, 20);

    assert(stub.calledWith('SUM', 100, 20));
    assert(spy.calledWith('The total is: 10'));
    stub.restore();
    spy.restore();
  });
});
