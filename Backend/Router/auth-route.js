const express = require ('express')
const router = express.Router()


 const {home,register,login} = require('../Controller/auth-controller');
 const signupSchema = require("../validator/auth-validator")
 const validate = require('../middlewares/validate-middleware')

 router.route('/home').get(home)
router.route('/register').post( validate(signupSchema),register)
router.route('/login').post(login)

 
module.exports = router;