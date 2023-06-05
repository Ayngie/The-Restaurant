const Booking = require("../../models/Booking");
const Guest = require("../../models/Guest");
const { NotFoundError, BadRequestError } = require("../../utils/errors");

exports.getAllBookings = async (req, res, next) => {
  const date = req.query.s;
  const bookings = await Booking.find({ date: date }).populate("guest");
  if (!bookings) throw new NotFoundError("Det finns inga bokningar 😢");
  return res.send(bookings);
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
  // KOLLA om gästen redan finns. Med hjälp av email.
  const guest = await Guest.create(newGuest);

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

  const bookingToDelete = await Booking.findById(bookingId);
  if (!bookingToDelete)
    throw new NotFoundError("Den här bokningen finns inte...");

  const guestToDelete = await Guest.findById(bookingToDelete.guest);
  // Kolla om gästen har någon annan bokning.
  await guestToDelete.deleteOne();
  await bookingToDelete.deleteOne();

  return res.status(204).send("Bokningen borttagen!");
};

exports.getBookingById = async (req, res) => {
  const bookingId = req.params.bookingId;
  const booking = await Booking.findById(bookingId).populate({ path: "guest" });

  if (!booking) throw new NotFoundError("Den här bokningen finns inte...");

  return res.status(200).json(booking);
};
