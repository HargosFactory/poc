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
