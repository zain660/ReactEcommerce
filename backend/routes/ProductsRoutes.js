import express from "express";
import { getAllProducts } from "../Controllers/ProductController.js";
import { getProductById } from "../Controllers/ProductController.js";

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);



export default router;