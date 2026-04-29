const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: false,
    },
    specialization: {
      type: String,
      required: true,
      enum: [
        "General Physician",
        "Cardiologist",
        "Dermatologist",
        "ENT",
        "Orthopedic",
        "Pediatrician",
        "Gynecologist",
        "Neurologist",
        "Psychiatrist",
      ],
    },
    experience: {
      type: Number,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isavailable: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true }
);

const doctor = mongoose.model("meddoctor", userSchema);
module.exports = doctor;