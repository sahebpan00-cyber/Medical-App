const express=require('express');
const router=express.Router();
const{addDoctor,getDoctors,getOneDoctor,updateDoctor,deleteDoctor,toggleAvailability,getSpecializations,getAvailableDoctorsBySpecialization}=require('../controllers/DoctorController');

// Doctor routes
router.post('/adddoctors',addDoctor);
router.get('/getdoctors',getDoctors);
router.get('/getonedoctors/:id',getOneDoctor);
router.put('/updatedoctors/:id',updateDoctor);
router.delete('/deletedoctors/:id',deleteDoctor);
router.patch("/toggle-availability/:id",toggleAvailability);
// Get all specializations
router.get("/specializations", getSpecializations);

// Get available doctors by specialization
router.get(
  "/available/:specialization",
  getAvailableDoctorsBySpecialization
);


module.exports=router;