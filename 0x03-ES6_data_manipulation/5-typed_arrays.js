export default function (length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, length);
  try {
    view.setInt8(position, value);
  } catch (error) { Error('Position outside range'); }
  return view;
}
