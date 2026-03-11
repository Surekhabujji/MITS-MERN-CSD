const Auth=require('../models/auth')
const bcrypt=require('bcryptjs');

exports.register=async(req,res)=>{
    try{
    const{name,email,password}=req.body;
    const exist=await Auth.findOne({email});
    if(exist){
        return res.status(400).json({message:"User already Exist"})
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const user=await Auth.create({
        name,
        email,
        password:hashedPassword
    })
    res.status(201).json({message:"User created Successfully",user})
    }catch(err){
        res.status(500).json(err);
    }

};
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await Auth.findOne({email});
        if(!user){
            res.status(401).json({message:"User not Found"});
        }
        const match=await bcrypt.compare(password,user.password);
        if(!match){
            return res.status(401).json({message:"Invalid Credential"});
        }
        res.status(200).json({message:"Login Successfully",user})
    }catch(err){
        res.status(500).json(err);
    }
    

}