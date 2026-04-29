const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

const user = mongoose.model("meduser", userSchema);
module.exports = user;