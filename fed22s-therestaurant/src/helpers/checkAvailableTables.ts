export const checkAvailableTables = (
  guests: number,
  bookedTables: IBookedTables,
  time: string
): boolean => {
  let isFullyBooked: boolean = false;
  if (time === "18:00") {
    if (guests >= 7 && bookedTables.tablesAtSix >= 14) {
      isFullyBooked = false;
    }
    if (guests >= 7 && bookedTables.tablesAtSix <= 13) {
      isFullyBooked = true;
    }
    if (guests <= 6 && bookedTables.tablesAtSix <= 14) {
      isFullyBooked = true;
    }
  }
  if (time === "21:00") {
    if (guests >= 7 && bookedTables.tablesAtNine >= 14) {
      isFullyBooked = false;
    }
    if (guests >= 7 && bookedTables.tablesAtNine <= 13) {
      isFullyBooked = true;
    }
    if (guests <= 6 && bookedTables.tablesAtNine <= 14) {
      isFullyBooked = true;
    }
  }
  return isFullyBooked;
};
