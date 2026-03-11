const mongoose=require('mongoose');

const authSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    user:{
        type:String,
        default:"user"
    }

})
module.exports=mongoose.model('Auth',authSchema);