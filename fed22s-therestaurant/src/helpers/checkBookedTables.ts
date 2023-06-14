import { IBooking } from "../models/IBooking";

export const checkBookedTables = (
  bookings: IBooking[],
  guests: number,
  time: string
): number => {
  let tables = {
    tablesAtSix: 0,
    tablesAtNine: 0,
  };
  let returnNum = 0;

  bookings.map((table) => {
    if (table.time === "18:00") {
      tables.tablesAtSix += Math.ceil(table.numberOfGuests / 6);
    }
    if (table.time === "21:00") {
      tables.tablesAtNine += Math.ceil(table.numberOfGuests / 6);
    }
  });
  if (time === "18:00") {
    returnNum = tables.tablesAtSix;
  }
  if (time === "21:00") {
    returnNum = tables.tablesAtNine;
  }
  console.log("Bord vid nio som är upptagna: ", tables.tablesAtNine);
  console.log("Bord vid sex som är upptagna: ", tables.tablesAtSix);
  return returnNum;
};
