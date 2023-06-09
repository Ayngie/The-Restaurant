const Booking = require("../../models/Booking");
const Guest = require("../../models/Guest");
const { NotFoundError, BadRequestError } = require("../../utils/errors");

exports.getAllBookings = async (req, res, next) => {
  const date = req.query.s;
  const bookings = await Booking.find({ date: date }).populate("guest");
  //  if (!bookings.length) throw new NotFoundError("Det finns inga bokningar 😢");

  if (bookings.length === 0) {
    return res.status(200).send([]);
  } else {
    return res.status(200).json(bookings);
  }
};

exports.createBooking = async (req, res, next) => {
  const {
    numberOfGuests,
    date,
    time,
    guest: { name, email, phoneNumber },
  } = req.body;

  // Fixa errors!
  if (!numberOfGuests || !date || !time) throw new BadRequestError("Ajajaj");

  const newGuest = {
    name: name,
    email: email,
    phoneNumber: phoneNumber,
  };

  let guest = await Guest.findOne({ email: email });
  console.log(guest);
  if (!guest) {
    guest = await Guest.create(newGuest);
  }

  const newBooking = {
    numberOfGuests: numberOfGuests,
    date: date,
    time: time,
    guest: guest,
  };
  const booking = await Booking.create(newBooking);

  return res.status(201).json(booking);
};

exports.deleteBookingById = async (req, res, next) => {
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

exports.getBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;
  const booking = await Booking.findById(bookingId).populate({ path: "guest" });

  if (!booking) throw new NotFoundError("Den här bokningen finns inte...");

  return res.status(200).json(booking);
};
