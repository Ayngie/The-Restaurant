const express = require("express");
const router = express.Router();

const {
  getAllBookings,
  getBookingById,
  createBooking,
  deleteBookingById,
} = require("../../controllers/api/bookingControllers");

router.get("/", getAllBookings);
router.get("/:id", getBookingById);
router.post("/", createBooking);
router.delete("/:id", deleteBookingById);

module.exports = router;
