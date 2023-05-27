const express = require("express");
const userModel = require("../model/userModel.js");
const { createUserSchema, options, loginUserSchema } = require("../utills/utill.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtsecret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  try {
    const { number, password } = req.body;

    const resultValidation = createUserSchema.validate(req.body, options)
    
     if(resultValidation.error){
        return res.status(400).json({error:resultValidation.error.details[0].message})
         }
        
         const hashPassword = await bcrypt.hash(password, 8);

         const User = await userModel.findOne({number:number});
         if(!User){
            const user = await userModel.create({ number, password:hashPassword, confirm_password:password });

            const userToken = { id: user._id };
            
            const token = jwt.sign({ id: userToken.id }, jwtsecret, { expiresIn: "30d" });
            res.cookie('token', token, { httpOnly: true, maxAge: 30 * 60 * 1000 });

            return res.status(200).json({ msg: "Registration successfull", user, token, success: true});
         }
        return res.status(400).json({ msg: "User already exists" })
  }catch(err) {
      return res.status(400).json({ msg: "User not Registered" });
  };
};


const loginUser = async(req,res) => {
try{ 
    const {number, password} = req.body;

    const resultValidation = loginUserSchema.validate(req.body, options)

    
    if(resultValidation.error){
      return res.status(400).json({error:resultValidation.error.details[0].message})
    }

    const User = await userModel.findOne({number:number});
         if(!User){
          return res.status(400).json({ error: "Invalid number/password" });
         }

         const userToken = { id: User._id };
            
        const token = jwt.sign({ id: userToken.id }, jwtsecret, { expiresIn: "30d" });
        res.cookie('token', token, { httpOnly: true, maxAge: 30 * 60 * 1000 });

         const loginValidation = await bcrypt.compare(password, User.password)
      
          if(loginValidation){
            return res.status(200).json({message: 'User login successfully', data: User, token, success: true})
          }
          res.status(400).json({error:"Invalid number/password"});
}catch(err){
  return res.status(400).json({ msg: "Invalid User" });
}
};
module.exports = {createUser, loginUser};
