export const calculateTimeDifference = (
  start: number,
  end: number,
  unit: 'milliseconds' | 'seconds' | 'minutes' | 'hours' = 'milliseconds',
) => {
  const differenceInMilliseconds = Math.abs(end - start);

  switch (unit) {
    case 'seconds':
      return differenceInMilliseconds / 1000;
    case 'minutes':
      return differenceInMilliseconds / (1000 * 60);
    case 'hours':
      return differenceInMilliseconds / (1000 * 60 * 60);
    case 'milliseconds':
    default:
      return differenceInMilliseconds;
  }
};

export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
