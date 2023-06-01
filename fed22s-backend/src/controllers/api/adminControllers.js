const Booking = require("../../models/Booking");
const { NotFoundError } = require("../../utils/errors");

exports.getAllBookings = async (req, res) => {
  const date = req.query.s;
  const booking = await Booking.find({ date: date }).populate("guest");

  if (!booking.length)
    throw new NotFoundError("Det finns ingen bokning den här dagen...");

  return res.status(200).json(booking);
};

exports.updateBookingById = async (req, res) => {
  // update numberOfGuest
  const bookingId = req.params.bookingId;
  const updateNumberOfGuest = req.body.numberOfGuest;
  const booking = await Booking.findByIdAndUpdate(
    bookingId,
    { numberOfGuests: updateNumberOfGuest },
    { new: true }
  );

  return res.send(booking);
};

exports.deleteBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;

  const bookingToDelete = await Booking.findById(bookingId);
  if (!bookingToDelete)
    throw new NotFoundError("Den här bokningen finns inte...");

  await bookingToDelete.deleteOne();

  return res.status(204).send("Bokningen borttagen!");
};
