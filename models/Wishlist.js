const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
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


});

const Wishlist = mongoose.model("Wishlist", WishlistSchema);
module.exports = Wishlist;