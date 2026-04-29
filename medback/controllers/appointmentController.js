const Appointment= require('../models/appointmentModel');



exports.createAppointment = async (req, res) => {
  try {
    console.log("REQ BODY 👉", req.body);

    const {
      user,
      doctor,
      specialization,
      patientName,
      age,
      contactNumber,
      appointmentDate,
      appointmentTime,
    } = req.body;

    if (!user || !doctor) {
      return res.status(400).json({ message: "User or Doctor missing" });
    }

    // const selectedDate = new Date(appointmentDate);
    // selectedDate.setHours(0, 0, 0, 0);

    // const existingAppointment = await Appointment.findOne({
    //   doctor,
    //   appointmentDate: selectedDate,
    //   appointmentTime,
    //   status: { $ne: "Rejected" },
    // });

    // if (existingAppointment) {
    //   return res.status(400).json({
    //     message: "This time slot is already booked",
    //   });
    // }

    const appointment = new Appointment({
      user,
      doctor,
      specialization,
      patientName,
      age,
      contactNumber,
      appointmentDate,
      appointmentTime,
    });

    await appointment.save();

    res.status(201).json({
      message: "Appointment Booked Successfully",
      appointment,
    });

  } catch (error) {
    console.log("CREATE APPOINTMENT ERROR 👉", error);
    res.status(500).json({ message: error.message });
  }
};


// 📌 Get All Appointments (Admin)
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("user", "name email")
      .populate("doctor", "fullname specialization");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📌 Get User Appointments
exports.getUserAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      user: req.params.userId,
    }).populate("doctor", "fullname specialization");

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📌 Update Status (Admin Approve/Reject)
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
