const mongoose = require("mongoose")


const SubcategorySchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,"Maincategoery Name Is Required"]
    },
    pic:{
        type: String,
        required:[true,"Maincategoery Pic Is Required"]

        
    },
    status:{
        type:Boolean,
        default:true

    }


})
const Subcategory = mongoose.model("Subcategory", SubcategorySchema);
module.exports = Subcategory;