import express from "express";
import db from "./config/config.js";
import prodductRoutes from "./routes/ProductsRoutes.js";
import cartRoutes from "./routes/CartsRoutes.js";
import cors from "cors";


const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
app.use(cors());
app.use(express.json());
app.use('/products', prodductRoutes);
app.use('/carts', cartRoutes);



app.listen(5000, () => console.log('Server running at port 5000.'));