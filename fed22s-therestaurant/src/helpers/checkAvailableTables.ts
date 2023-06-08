export const checkAvailableTables = (guests: number, bookedTables: number) => {
  if (guests >= 7) {
    if (bookedTables >= 14) {
      return false;
    } else {
      return true;
    }
  }
  if (guests <= 6) {
    return true;
  }
};
