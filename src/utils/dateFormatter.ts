const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];

export const formatDateFromUnix = (timestamp: string) => {
  const date = new Date(parseInt(timestamp)); // Parse timestamp to integer and create Date object
  const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero
  const month = date.getMonth() + 1; // Months are 0-based, so add 1 and pad
  const year = date.getFullYear(); // Get full year
  return `${day}-${months[month]}-${year}`; // Format as DD-MM-YYYY
};
