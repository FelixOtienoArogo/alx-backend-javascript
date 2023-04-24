export default function cleanSet(set, startString) {
  let string = '';
  if (!startString || !startString.length) {
    return string;
  }
  set.forEach((val) => {
    if (val && val.startsWith(startString)) {
      string += `${val.replace(startString, '')}-`;
    }
  });
  return string.slice(0, string.length - 1);
}
