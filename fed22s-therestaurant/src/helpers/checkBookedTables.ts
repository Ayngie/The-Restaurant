import { IBooking } from "../models/IBooking";

export const checkBookedTables = (
  bookings: IBooking[],
  guests: number,
  time: string
) => {
  let tables = {
    tablesAtSix: 0,
    tablesAtNine: 0,
  };

  bookings.map((table) => {
    if (table.time === "18:00") {
      if (table.numberOfGuests <= 6) {
        tables.tablesAtSix++;
      }
      if (table.numberOfGuests > 6) {
        tables.tablesAtSix += tables.tablesAtSix + 2;
      }

      if (tables.tablesAtSix > 15) {
        // console.log("det är fullt på bord vid sex");
      } else {
        //console.log("det är ledigt på bord vid sex");
      }
    }

    if (table.time === "21:00") {
      if (table.numberOfGuests <= 6) {
        tables.tablesAtNine++;
      }
      if (table.numberOfGuests > 6) {
        tables.tablesAtNine += tables.tablesAtNine + 2;
      }

      if (tables.tablesAtNine > 15) {
        // console.log("det är fullt på bord vid nio");
      } else {
        // console.log("det är ledigt på bord vid nio");
        //anropa funktion
      }
    }
  });
  console.log("Bord vid nio som är upptagna: ", tables.tablesAtNine);
  console.log("Bord vid sex som är upptagna: ", tables.tablesAtSix);
  // return tables;
  if (time === "18:00") {
    return tables.tablesAtSix;
  } else {
    return tables.tablesAtNine;
  }
};
