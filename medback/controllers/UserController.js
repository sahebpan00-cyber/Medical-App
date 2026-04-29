const User=require("../models/UserModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: 'Please fill in all fields' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({
                success: false,
                message: 'Invalid user' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({
                success: false,
                message: 'Invalid password' });
        }
        const token_secret = process.env.JWT_SECRET;
        const token = jwt.sign({ id: user._id }, token_secret, { expiresIn: '1h' });
        res.status(200).send({
            success: true,
            message: 'Login successful',
            token:token,
        user: {
    id: user._id,
    email: user.email,
    isAdmin: user.isAdmin,
    name: user.name
  } });
        }
        catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Server error' });
    }
        }

exports.register = async (req, res) => {
    try {
        const { name, email, password, mobile } = req.body;
        if (!name || !email || !password || !mobile) {
            return res.status(400).send({
                success: false,
                message: 'Please fill in all fields' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: 'Email already exists' });
        }
        const salt= await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            name,
            email,
            mobile,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).send({
            success: true,
            message: 'User registered successfully' });
        
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Server error' });
        
    }
}
            

exports.getOneUser=async(req,res)=>{
    try {
        const user= await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:'Error fetching user', error: error.message});
    }};

    exports.getAllUsers=async(req,res)=>{
        try {
            const users= await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({message:'Error fetching users', error: error.message});
        }};

exports.updateUser=async(req,res)=>{
    try {
        const id=req.params.id;
        const userexist= await User.findById(id);
        if(!userexist){
            return res.status(404).json({message:'User not found'});
        }
        const updatedUser= await User.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({message:'Error updating user', error: error.message});
    }};

exports.deleteUser=async(req,res)=>{
    try {
        const id=req.params.id;
        const userexist= await User.findById(id);
        if(!userexist){
            return res.status(404).json({message:'User not found'});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({message:'User deleted successfully'});
    } catch (error) {
        res.status(500).json({message:'Error deleting user', error: error.message});
    }};