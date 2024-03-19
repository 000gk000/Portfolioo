const bcrypt = require('bcrypt');
const User = require("../models/user-model")



const home =  async(req,res) =>{
try {
    
    return res.status(200).json({message:"home pagekjdlfkj"})
   
} catch (error) {
    console.log('error')
}
}


const register = async(req,res) =>{
    try {
        
          const { username, email, phone, password } = req.body;
          const userexist = await User.findOne({email})
        if(userexist){
             return res.status(400).json({msg:"email already exists "})
        }
        // hash password 

       const saltRound  = 10;
      const hash_password = await bcrypt.hash(password,saltRound)
        
      // creating new user 
      
      const newUser = await User.create({ username, email, phone, password : hash_password});

        // Send success response
        return res.status(201).json({ msg: 'user created ', token: await newUser.generateToken()});
        
        
        
    } catch (error) {
        
        return res.status(500).json({ msg: "Internal server error" });

    }
}

// login logic 

const login = async (req,res) =>{
          try {
            const{email,password}= req.body
            const userexist = await User.findOne({email})
            //console.log(userexist)
            if(!userexist)
            {
                return res.status(400).json({msg:"invalid email or password "})
            }

            const user = await bcrypt.compare(password,userexist.password)
           if(user)
           {
            res.status(200).json({
                msg:"login successfully",
                 token:await userexist.generateToken(),
                 userId:userexist._id.toString()
            })
           }
           else
           {
            res.status(401).json({msg:"invalid"})
           }
                
          } 
          catch (error)
           {
            console.log('login error')
          }
}


module.exports  ={
    home,
    register,
    login
}
