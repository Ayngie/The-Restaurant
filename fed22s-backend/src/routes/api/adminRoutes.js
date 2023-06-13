const express = require("express");
const router = express.Router();

const {
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
} = require("../../controllers/api/adminControllers");

router.get("/", getAllBookings);
router.get("/:bookingId", getBookingById);
router.put("/:bookingId", updateBookingById);
router.delete("/:bookingId", deleteBookingById);

module.exports = router;
