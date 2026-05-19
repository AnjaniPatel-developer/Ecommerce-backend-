const mongoose = require("mongoose")


const FaqSchema = new mongoose.Schema({
    Question:{
        type:String,
        unique:true,
        required:[true," Question Is Required"]
    },
   Answer:{
        type: String,
        required:[true," Answer Is Required"]
  
    },
   
   
   
    status:{
        type:Boolean,
        default:true

    }


})
const Faq = mongoose.model("Faq", FaqSchema);
module.exports = Faq;