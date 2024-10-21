export function getCurrentDate() {
  const currentDate = new Date();

  return (
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate()
  );
}

export function other() {
    return 0;
}