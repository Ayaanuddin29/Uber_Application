const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"First Name atleast 3 character long"]
        },
        lasttname:{
            type:String,
            minlength:[3,"last Name atleast 3 character long"]
        }
    },
    email:{
        type:String,
        requied:true,
        unique:true
    },
    password:{
        type:String,
        requied:true,
        select:false
    },
    socketId:{
        type:String,
    },
})
userSchema.methods.generateAuthToken=function(){
    const token =jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}
userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;