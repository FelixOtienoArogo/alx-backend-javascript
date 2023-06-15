function getPaymentTokenFromAPI(success) {
  if (success) {
    const promise = new Promise((resolve, reject) => {
      resolve({ data: 'Successful response from the API' });
    });
    return promise;
  }
}
module.exports = getPaymentTokenFromAPI;
