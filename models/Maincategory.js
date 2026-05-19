const mongoose = require("mongoose")


const MaincategorySchema = new mongoose.Schema({
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
const Maincategory = mongoose.model("Maincategory", MaincategorySchema);
module.exports = Maincategory;