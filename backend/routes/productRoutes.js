// server.js becomes very messy if all the routes are placed there. Hence, express has a feature called routes where we can place our routes in a different folder.
// to use these routes import this file in the server.js file and use these routes through app.use() method
import express from 'express';
const router = express.Router();
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, createProductReview, getTopProducts } from '../controllers/productController.js';
import { admin, protect } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router.route('/:id').get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct);
router.route('/:id/reviews').post(protect, createProductReview);

export default router;
