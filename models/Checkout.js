const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User Id Is Required"]
    },
    deliveryAddress: {
        type: Object,
        required: [true, " deliveryAddress Is Required"]
    },

    orderStatus: {
        type: String,
        default:"Order Has Been Placed" 
        
    },

    paymentMode: {
        type: String,
        default:"COD" 
    },

    paymentStatus: {
        type:String,
        default:"Pending"
    },

    subtotal: {
        type:Number,
        required:[true,"subtotal Amount Is Required"]
        
    },
    shipping: {
        type:Number,
        required:[true,"Shipping Amount Is Required"]
        
    },
    
   
    rppid: {
        type:String,
        default:""
    },

   products:Array({
    product:{
       type: mongoose.Schema.Types.ObjectId,
       ref:"Product",
       required:[true,"Product id is required"]
    },
     color: {
        type: String,
        required: [true, "Product Color Is Required"]
    },
    size: {
        type: Number,
        required: [true, "size Is Required"]
    },
    qty: {
        type: Number,
        required: [true, "Product qty Is Required"]
    },
    total: {
        type:Number,
        required:[true,"total Amount Is Required"]
        
    },
   })
},{timestamps:true});

const Checkout = mongoose.model("Checkout", CheckoutSchema);
module.exports = Checkout;