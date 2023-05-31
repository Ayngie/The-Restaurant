const Booking = require("../../models/Booking");

//getAllBookings
exports.getAllBookings = async (req, res) => {
  // const bookings = await Booking.find();
  return res.send("getAllBookings");
};

//updateBookingById
exports.updateBookingById = async (req, res) => {
  return res.send("updateBookingById");
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
