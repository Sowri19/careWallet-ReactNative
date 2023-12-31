export const formatDate = (date: Date) => {
  let month = `${date.getMonth()}`;
  if (month.length == 1) {
    month = `0${month}`;
  }
  let day = `${date.getDate()}`;
  if (month.length == 1) {
    day = `0${day}`;
  }
  return `${month}/${day}/${date.getFullYear()}`;
};