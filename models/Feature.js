const mongoose = require("mongoose")


const FeatureSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,"Feature Name Is Required"]
    },
    icon:{
        type: String,
        required:[true,"Feature Icon Is Required"]
  
    },
   
    shortDesscription:{
        type:String,
          required:[true,"Feature ShortDescription Is Required"]

    },
   
    status:{
        type:Boolean,
        default:true

    }


})
const Feature = mongoose.model("Feature", FeatureSchema);
module.exports = Feature;