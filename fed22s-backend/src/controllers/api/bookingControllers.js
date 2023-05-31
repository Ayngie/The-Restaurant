const Booking = require("../../models/Booking");

//getAllBookings
exports.getAllBookings = async (req, res) => {
  return res.send("getAllBookings");
};
//createBooking
exports.createBooking = async (req, res) => {
  return res.send("createBooking");
};
//deleteBookingById
exports.deleteBookingById = async (req, res) => {
  try {
    return res.send("deleteBookingById");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
