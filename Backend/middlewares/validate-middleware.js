// middle ware to validate ki schema zod ka that is signup schema se wo  mil raha hai ki nahi jo user 
// bhara hai 


const validate = (signupSchema)=> async(req,res,next) => {
 try {
    const parseBody = await signupSchema.parseAsync(req.body)
    req.body= parseBody;
    next();
    
 } catch (err) {
    const message= err.errors[0].message
    console.log(message)
    res.status(400).json({msg: message})
 }
}


module.exports = validate;