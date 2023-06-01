const express = require("express");
const router = express.Router();

const {
  getAllBookings,
  getBookingById,
  createBooking,
  deleteBookingById,
} = require("../../controllers/api/bookingControllers");

router.get("/", getAllBookings);
router.get("/:bookingId", getBookingById);
router.post("/", createBooking);
router.delete("/:bookingId", deleteBookingById);

module.exports = router;
