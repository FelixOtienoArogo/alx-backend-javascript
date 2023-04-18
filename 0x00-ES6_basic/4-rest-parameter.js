export default function returnHowManyArguments(...Arguments) {
  let num = 0;
  for (const arg of Arguments) {
    num += 1;
  }
  return num;
}
