
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        requried:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

});
// userschema.methods se kitne bhi methods create kar sakte hain hamlog
// yahan hamlog generate token function create kar rahe hain jo ki token generate kar rhaa hai 
// aur isko wahan call kar rahe message me jab user successfully crete ho ja rha hai tab  
userSchema.methods.generateToken =  async function(){
  try {
    return jwt.sign({
        userId: this._id.toString()
    },
       process.env.JWT_SECRET_KEY,
       {
        expiresIn:"30d"
       }
    )
  } catch (error) {
    console.log("jwt error")
  }
}

const User = new mongoose.model("User",userSchema);
module.exports = User

// userschema

// authenticiation - kisi ko identify karna 
// autherization - authentication ke bad usko power dena 

// tokens not stored in the database along with the user details. 
// they are issued by server while authenticating and stored on the client side e.g -> in cokies or local storage 
