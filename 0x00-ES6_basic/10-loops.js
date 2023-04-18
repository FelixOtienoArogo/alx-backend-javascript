export default function appendToEachArrayValue(array, appendString) {
  const temp = array;
  for (const [idx, val] of array.entries()) {
    temp[idx] = appendString + val;
  }

  return temp;
}
