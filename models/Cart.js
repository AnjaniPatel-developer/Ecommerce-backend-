const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User Id Is Required"]
    },

    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", 
        required: [true, "Product Id Is Required"]
    },

    qty: {
        type: Number,
        required: [true, "Product Quantity Is Required"]
    },

    total: {
        type: Number,
        required: [true, "Product Total Is Required"]
    },

    size: {
        type: Number,
        required: [true, "Product Size Is Required"]
    },

    color: {
        type: String,
        required: [true, "Product Color Is Required"]
    }
});

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;