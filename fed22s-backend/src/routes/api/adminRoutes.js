const express = require("express");
const router = express.Router();

const {
  getAllBookings,
  updateBookingById,
  deleteBookingById,
} = require("../../controllers/api/adminControllers");

router.get("/", getAllBookings);
router.put("/:bookingId", updateBookingById);
router.delete("/:bookingId", deleteBookingById);

module.exports = router;
