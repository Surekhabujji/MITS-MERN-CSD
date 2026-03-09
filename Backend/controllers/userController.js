exports.getUsers=(req,res)=>{
    res.send("Get All Users");
}
exports.getUserById=(req,res)=>{
    res.send("Get USer By Id");
}
exports.createUser=(req,res)=>{
    res.json({
        message:"User Created Succesfully"
    })
}
exports.updateUser=(req,res)=>{
    res.json({
        message:"User Updated Successfully"
    })
}
exports.deleteUser=(req,res)=>{
    res.json({
        message:"User deleted Successfully"
    })
}