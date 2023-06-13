require("dotenv").config();
const mongoose = require("mongoose");
const Booking = require("../src/models/Booking");
const Guest = require("../src/models/Guest");
const { mockBookings } = require("./bookings");
const { mockGuest } = require("./guest");

const populateMongoDbWithMockData = async (connectionString) => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(connectionString);
    console.log("MongoDB connected: " + conn.connection.host);

    await Guest.deleteMany();
    await Booking.deleteMany();

    //const guestRes = await Guest.create(mockGuest);
    // const bookingRes = await Booking.create(mockBookings);

    console.log("It worked yey. Mockdata is now added.");
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

populateMongoDbWithMockData(process.env.CONNECTION_STRING);
