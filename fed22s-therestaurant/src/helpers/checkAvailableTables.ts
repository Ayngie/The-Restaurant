export const checkAvailableTables = (
  guests: number,
  bookedTables: number
): boolean => {
  let isFullyBooked: boolean = false;
  if (guests >= 7 && bookedTables >= 14) {
    isFullyBooked = false;
  }
  if (guests >= 7 && bookedTables <= 13) {
    isFullyBooked = true;
  }
  if (guests <= 6 && bookedTables <= 14) {
    isFullyBooked = true;
  }
  return isFullyBooked;
};
