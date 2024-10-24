export default function DateFormatter(date) {
  const dateInMs = new Date(Date.parse(date));

  const year = dateInMs.getFullYear();
  const month = dateInMs.getMonth() + 1;
  const day = dateInMs.getDate();

  const newDate = `${day}.${month}.${year}`;

  return newDate;
}
