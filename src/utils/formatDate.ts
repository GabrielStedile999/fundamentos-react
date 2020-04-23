const formatDate = (value: Date): string => {
  const event = new Date(value);
  return Intl.DateTimeFormat('pt-br').format(event);
};

export default formatDate;
