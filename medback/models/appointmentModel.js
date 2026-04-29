const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "meduser",
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "meddoctor",
      required: true,
    },

    specialization: {
      type: String,
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },

    // ✅ NEW FIELDS
    appointmentDate: {
      type: String,
      required: true,
    },
    appointmentTime: {
      type: String,
      required: true,
    },

    status: {
      type: String,

      default: "Booked",
    },
  },
  { timestamps: true }
);
const appointment = mongoose.model("appointment", appointmentSchema);
module.exports = appointment;