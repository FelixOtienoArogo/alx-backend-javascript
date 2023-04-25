export default function updateUniqueItems(groc) {
  const update = groc;
  if (!(groc instanceof Map)) {
    throw Error('Cannot process');
  }
  try {
    update.forEach((value, key) => {
      if (value === 1) {
        update.set(key, 100);
      }
    });
  } catch (err) { Error('Cannot process'); }
}
