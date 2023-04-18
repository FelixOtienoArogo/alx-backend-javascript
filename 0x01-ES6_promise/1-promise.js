export default function getResponseFromAPI(success) {
  const test = success;
  const firstPromise = new Promise((resolve, reject) => {
    if (test) {
      resolve(
        {
          status: 200,
          body: 'Success',
        },
      ); // Everythong went well
    } else {
      reject(

        Error('The fake API is not working currently'),
      );
    }
  });
  return firstPromise;
}
