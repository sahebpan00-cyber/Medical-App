import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';

// ==============================
// USER AUTH MIDDLEWARE
// ==============================
export const userAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if token exists
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      });
    }

    // Remove "Bearer" from token
    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Invalid authorization format'
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

// ==============================
// ADMIN AUTH MIDDLEWARE
// ==============================
export const isAdmin = async (req, res, next) => {
  try {
    // userAuth MUST run before this
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized access'
      });
    }

    const authUser = await User.findById(req.user.id);

    if (!authUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (!authUser.isAdmin) {
      return res.status(403).json({
        success: false,
        message: 'Admin access denied'
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Authorization failed'
    });
  }
};
