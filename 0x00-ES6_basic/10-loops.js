export default function appendToEachArrayValue(array, appendString) {
  const temp = [];
  for (const val of array) {
      temp.push(appendString + val);
  }
  return temp;
}
