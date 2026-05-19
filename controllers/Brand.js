const mongoose = require("mongoose")


const BrandSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,"Brand Name Is Required"]
    },
    pic:{
        type: String,
        required:[true,"Brand Pic Is Required"]

        
    },
    status:{
        type:Boolean,
        default:true

    }


})
const Brand = mongoose.model("Brand", BrandSchema);
module.exports = Brand;