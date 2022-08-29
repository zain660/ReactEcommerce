import { Sequelize } from "sequelize";
import db from "../config/config.js";
import Product from "./ProductModel.js";

const { DataTypes } = Sequelize;


const Cart = db.define('carts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    productId: {
        type: DataTypes.INTEGER
    },
    quantity:{
        type: DataTypes.INTEGER
    },
}, {
    freezeTableName: true
});


// Cart.belongsToMany(Product,{
//     sourceKey: "id",
//     as: "products",
//     foreignKey: "productId" 

// });
Cart.belongsTo(Product);
export default Cart;