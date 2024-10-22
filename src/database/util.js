export function getCurrentDate() {
  const currentDate = new Date();

  return (
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1 < 10
      ? "0" + (currentDate.getMonth() + 1)
      : currentDate.getMonth() + 1) +
    "-" +
    (currentDate.getDate() < 10
      ? "0" + currentDate.getDate()
      : currentDate.getDate())
  );
}

export function getCurrentTime() {
  const currentDate = new Date();

  return (
    currentDate.getHours() +
    ":" +
    (currentDate.getMinutes() < 10
      ? "0" + currentDate.getMinutes()
      : currentDate.getMinutes())
  );
}
