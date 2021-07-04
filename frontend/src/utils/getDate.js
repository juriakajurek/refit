export function getDate(d) {
  return (
    (d.getDate().toString().length < 2 ? "0" : "") +
    d.getDate() +
    "." +
    ((d.getMonth() + 1).toString().length < 2 ? "0" : "") +
    (d.getMonth() + 1) +
    "." +
    d.getFullYear()
  );
}
