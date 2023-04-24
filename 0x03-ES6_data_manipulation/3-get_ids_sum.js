export default function getStudentIdsSum(array) {
  function func(total, obj) {
    return total + obj.id;
  }
  return (
    array.reduce(func, 0)
  );
}
