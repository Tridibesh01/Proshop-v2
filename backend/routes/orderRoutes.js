// server.js becomes very messy if all the routes are placed there. Hence, express has a feature called routes where we can place our routes in a different folder.
// to use these routes import this file in the server.js file and use these routes through app.use() method
import express from 'express';
const router = express.Router();
import { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, updateOrderToDelivered, getOrders } from '../controllers/orderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

// use route in case of multiple functionalities in same api, and post, get, update, delete in case single functionality
router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/mine').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);

export default router;
