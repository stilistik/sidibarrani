export function getAWSTimeStamp(date?: Date) {
  const _date = date || new Date();
  return Math.floor(_date.getTime() / 1000);
}
