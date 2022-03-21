const express = require('express')

const { body, validationResult } = require('express-validator');

const User = require("../models/user.model")
const router = express.Router();

router.post("/",
body("firstName").trim()
.not()
.isEmpty()
.withMessage("Name is Required")
.isLength({min:3, max:30}),
body("lastName").trim()
.not()
.isEmpty()
.withMessage("Name is Required")
.isLength({min:3, max:30}),
body("age").trim()
.not()
.isEmpty()
.withMessage("Age is Required")
.isNumeric()
.custom((value)=>{
    if(value<1 || value>150){
        throw new Error("Age must be between 1 and 150")
    }
    return true
}),
body("email")
.isEmail()
.custom(async(value)=>{
    const user = await User.findOne({email: value});
    if(user){
        throw new Error("E-mail already in use")
    }
    return true
}), async (req,res) =>{
    try{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
        const user = await User.create(req.body)

        return res.status(200).send(user)
    }
    catch(err){
        return res.status(500).send({message: err.message})
    }
}
)

module.exports = router