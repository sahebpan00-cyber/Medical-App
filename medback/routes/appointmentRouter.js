const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getAllAppointments,
  getUserAppointments,
  updateAppointmentStatus,
} = require("../controllers/appointmentController");

router.post("/create", createAppointment);
router.get("/all", getAllAppointments);
router.get("/user/:userId", getUserAppointments);
router.put("/update/:id", updateAppointmentStatus);

module.exports = router;  
