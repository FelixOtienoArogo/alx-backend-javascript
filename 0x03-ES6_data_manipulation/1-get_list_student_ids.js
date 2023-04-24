export default function getListStudentIds(array) {
  const arrIds = [];
  if (!Array.isArray(array)) {
    return [];
  }
  const map = new Map(array.map((obj) => [obj.id, obj.firstName, obj.location]));
  for (const id of map.keys('id')) {
    arrIds.push(id);
  }
  return arrIds;
}
