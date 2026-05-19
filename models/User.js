const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        
        required:[true,"User Name Is Required"]
    },
  username:{
        type: String,
        unique:true,
        required:[true,"User name Is Required"]

        
    },
  email:{
        type: String,
        unique:true,
        required:[true,"User email address Is Required"]

        
    },
  
    phone:{
        type:String,
        Unique:true,
        required:[true,"User Phone Number Ia Required"]

    },
    
    password:{
        type:String,
        Unique:true,
        required:[true,"User Password Ia Required"]

    },
    role:{
        type:String,
        default:"Buyer"

    },
   
   
    address:{
        type:String,
        default:[]

    },
   passwordReset: {
    type: {},
    default: {}
},
    status:{
        type:Boolean,
        default:true

    }



})
const User = mongoose.model("User", UserSchema);
module.exports = User;