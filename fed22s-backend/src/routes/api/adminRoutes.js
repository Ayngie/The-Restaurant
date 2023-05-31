const express = require("express");
const router = express.Router();

const {
  getAllBookings,
  updateBookingById,
  deleteBookingById,
} = require("../../controllers/api/adminControllers");

router.get("/", getAllBookings);
router.put("/:id", updateBookingById);
router.delete("/:id", deleteBookingById);

module.exports = router;
