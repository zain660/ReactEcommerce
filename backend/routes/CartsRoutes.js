import express from "express";
import { AddToCart, GetCartData, updateCart } from "../Controllers/CartController.js";


const router = express.Router();

router.post('/:user_id/:product_id', AddToCart);
router.get('/', GetCartData);
router.get('/:cart_id', updateCart);

export default router;