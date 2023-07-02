// server.js becomes very messy if all the routes are placed there. Hence, express has a feature called routes where we can place our routes in a different folder.
// to use these routes import this file in the server.js file and use these routes through app.use() method
import express from 'express';
const router = express.Router();
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deleteUser, updateUser } from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// use route in case of multiple functionalities in same api, and post, get, update, delete in case single functionality
router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser);

export default router;
