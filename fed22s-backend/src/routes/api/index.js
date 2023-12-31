const express = require("express");
const router = express.Router();

const bookingRoutes = require("./bookingRoutes");
const adminRoutes = require("./adminRoutes");

router.use("/bookings", bookingRoutes);
router.use("/adminroutes", adminRoutes);

module.exports = router;
