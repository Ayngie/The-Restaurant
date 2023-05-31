const mongoose = require("mongoose");
const Guest = require("./Guest");

const BookingSchema = new mongoose.Schema(
  {
    numberOfGuests: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    guest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", BookingSchema);
