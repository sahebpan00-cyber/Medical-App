const express = require("express");
const router = express.Router();

const { userAuth, isAdmin } = require('../middlewares/authMiddleware');
const { getOneUser, updateUser, deleteUser,login,register, getAllUsers } = require('../controllers/UserController');

//user routes for login and registration
router.post('/login',login);
router.post('/register',register);
router.get('/admin',
  userAuth,
  isAdmin
);
router.get('/getoneuser/:id', userAuth, getOneUser);
router.put('/updateuser/:id', userAuth, updateUser);
router.delete('/deleteuser/:id', userAuth,deleteUser);
router.get('/allusers',getAllUsers)


module.exports = router;
