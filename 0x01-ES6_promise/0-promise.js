export default function getResponseFromAPI() {
  const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Success!'); // Everythong went well
    }, 250);
  });
  return firstPromise;
}
