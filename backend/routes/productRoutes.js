import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;