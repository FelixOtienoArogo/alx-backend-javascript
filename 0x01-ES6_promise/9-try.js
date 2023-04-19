export default function guardrail(mathFunction) {
  const queue = [];
  let ans;
  try {
    ans = mathFunction();
  } catch (error) {
    ans = error.toString();
  }
  queue.push(ans);
  queue.push('Guardrail was processed');
  return queue;
}
