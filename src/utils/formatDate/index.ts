export const formatDate = (paramDate: string): string => {
  if (!Date.parse(paramDate)) return "Invalid Date";
  let date: Date = new Date(paramDate);

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (month < 10) return `${day}/0${month}/${year}`;
  else return `${day}/${month}/${year}`;
};
