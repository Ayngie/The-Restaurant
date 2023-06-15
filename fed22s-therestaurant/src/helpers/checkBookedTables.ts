import { IBooking } from "../models/IBooking";

export const checkBookedTables = (bookings: IBooking[]): IBookedTables => {
  let tables: IBookedTables = {
    tablesAtSix: 0,
    tablesAtNine: 0,
  };

  bookings.map((table) => {
    if (table.time === "18:00") {
      tables.tablesAtSix += Math.ceil(table.numberOfGuests / 6);
    }
    if (table.time === "21:00") {
      tables.tablesAtNine += Math.ceil(table.numberOfGuests / 6);
    }
  });

  console.log("Bord vid nio som är upptagna: ", tables.tablesAtNine);
  console.log("Bord vid sex som är upptagna: ", tables.tablesAtSix);
  return tables;
};
