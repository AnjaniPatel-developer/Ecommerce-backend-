const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,

        required: [true, "Product Name Is Required"]
    },

    pic: {
        type: Array,
        required: [true, "Product pic is required"],
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'Please Provide Atlist One Product Pic'

        }
    },




    maincategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Maincategory",
        required: [true, "Product Maincategory Is Requires"]
    },

    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcategory",
        required: [true, "Product Subcategory Is Requires"]
    },

    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: [true, "Product Brand Is Requires"]
    },
    color: {
        type: Array,
        required: [true, " Product color Brand Is Requires"],

        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'Please Provide Atlist One Product color'

        }
    },



    size: {
        type: Array,
        required: [true, " Product Size Is Requires"],

        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'Please Provide Atlist One Product size'

        }
    },


    basePrice: {
        type: Array,
        required: [true, " Product basePrice Is Requires"]
    },

    discount: {
        type: Array,
        required: [true, " Product discount  Is Requires"]
    },

    finalPrice: {
        type: Array,
        required: [true, "Product finalPrice Is Requires"]
    },


    stock: {
        type: Boolean,
        default: true


    },
    stockQantity: {
        type: Number,
        default: [true, "product stock Qantity is required"]

    },

    discription:{
        type:String,
        required:"product discription is required"

    }



})
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;