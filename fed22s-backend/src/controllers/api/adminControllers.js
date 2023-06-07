const Booking = require("../../models/Booking");
const Guest = require("../../models/Guest");
const { NotFoundError, BadRequestError } = require("../../utils/errors");

exports.getAllBookings = async (req, res) => {
  const date = req.query.s;
  const booking = await Booking.find({ date: date }).populate("guest");

  if (!booking.length)
    throw new NotFoundError("Det finns ingen bokning den här dagen...");

  return res.status(200).json(booking);
};

exports.updateBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;
  const bookingUpdateId = { _id: bookingId };

  const bookingIdForGuest = await Booking.findById(bookingId);
  if (!bookingIdForGuest)
    throw new NotFoundError("Denna bokning finns inte...");
  const guestUpdateId = { _id: bookingIdForGuest.guest };

  const booking = {
    numberOfGuests: req.body.numberOfGuests,
    date: req.body.date,
    time: req.body.time,
  };

  const guest = {
    name: req.body.guest.name,
    email: req.body.guest.email,
    phoneNumber: req.body.guest.phoneNumber,
  };

  const guestUpdated = await Guest.findOneAndUpdate(guestUpdateId, guest, {
    new: true,
  });

  const bookingUpdated = await Booking.findOneAndUpdate(
    bookingUpdateId,
    booking,
    {
      new: true,
    }
  );

  const response = {
    id: bookingId,
    numberOfGuests: booking.numberOfGuests,
    date: booking.date,
    time: booking.time,
    guest: {
      id: guestUpdateId._id,
      name: guest.name,
      email: guest.email,
      phoneNumber: guest.phoneNumber,
    },
  };

  return res.status(201).json(response);
};

exports.deleteBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;

  const booking = await Booking.findById(bookingId).populate("guest");
  if (!booking) throw new NotFoundError("Den här bokningen finns inte...");

  const bookingToDelete = await Booking.countDocuments({
    guest: booking.guest._id,
  });

  if (bookingToDelete === 1) {
    await Guest.findByIdAndDelete(booking.guest);
    await Booking.findByIdAndDelete(bookingId);
  } else {
    await Booking.findByIdAndDelete(bookingId);
  }

  return res.sendStatus(204);
};
