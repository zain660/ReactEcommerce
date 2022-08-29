import { Sequelize } from "sequelize";
import db from "../config/config.js";

const { DataTypes } = Sequelize;

const Product = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    
    price: {
        type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true
});

export default Product;