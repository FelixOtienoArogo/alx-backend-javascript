const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToAPI = require('./3-payment');

describe('verify that console is called only once', () => {
  let logSpy;
  beforeEach(() => logSpy = sinon.spy(console, 'log'));
  afterEach(() => logSpy.restore());

  it('call with 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);
    assert(logSpy.calledWith('The total is: 120'));
    sinon.assert.calledOnce(logSpy);
  });
  it('call with 10 and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    assert(logSpy.calledWith('The total is: 20'));
    sinon.assert.calledOnce(logSpy);
  });
});
