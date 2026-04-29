const Doctor = require('../models/doctorModel');

exports.addDoctor = async (req, res) => {
  try {
    const doctorData = new Doctor(req.body);
    const existingDoctor = await Doctor.findOne({ email: doctorData.email });
    if (existingDoctor) {
      return res.status(400).json({ message: 'Doctor with this email already exists' });
    }
    const newDoctor = new Doctor({
      fullname: doctorData.fullname,
      email: doctorData.email,
      specialization: doctorData.specialization,
      experience: doctorData.experience,
      degree: doctorData.degree,
      mobile: doctorData.mobile
    });
    await newDoctor.save();
    res.status(201).json(newDoctor);

  } catch (error) {
    res.status(500).json({ message: 'Error adding doctor', error: error.message });
  }
};

exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors', error: error.message });
  }
};

exports.getOneDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctor', error: error.message });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const doctorexsist = await Doctor.findById(id);
    if (!doctorexsist) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ message: 'Error updating doctor', error: error.message });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const doctorexsist = await Doctor.findById(id);
    if (!doctorexsist) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    await Doctor.findByIdAndDelete(id);
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting doctor', error: error.message });
  }
};


exports.toggleAvailability = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    doctor.isavailable = !doctor.isavailable;
    await doctor.save();

    res.status(200).json({
      success: true,
      message: "Availability updated",
      doctor,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 🔹 Get All Unique Specializations
exports.getSpecializations = async (req, res) => {
  try {
    const specializations = await Doctor.distinct("specialization");

    res.json(specializations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// 🔹 Get Available Doctors by Specialization
exports.getAvailableDoctorsBySpecialization = async (req, res) => {
  try {
    const { specialization } = req.params;

    const doctors = await Doctor.find({
      specialization,
      isavailable: true,
    }).select("fullname specialization");

    res.json(doctors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};