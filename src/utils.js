export const formatDate = date_str => {
  if (date_str) {
    const date = new Date(date_str);
    const formattedDate = `${date.getMonth() +
      1}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return formattedDate;
  }
};
