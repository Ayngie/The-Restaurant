const express = require("express");
const router = express.Router();

const {
  getAllBookings,
  createBooking,
  deleteBookingById,
} = require("../../controllers/api/bookingControllers");

router.get("/", getAllBookings);
router.post("/", createBooking);
router.delete("/:id", deleteBookingById);

module.exports = router;
