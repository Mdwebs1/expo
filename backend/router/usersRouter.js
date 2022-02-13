const express = require("express");
let router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt= require('bcrypt')

module.exports = router ;

const Users = require('../schema/users')


//handle errors
const handleError = (err)=>{
    
    console.log(err.message, err.code);
  let error = { email: '', password: '' };

  //incorrect email
  if (err.message === 'incorrect email') {
    error.email = 'that email is not registered';
  }

    //incorrect password
    if (err.message === 'incorrect password') {
        error.password = 'that password is not correct';
      }

  // duplicate email error
  if (err.code === 11000) {
    error.email = 'that email is already registered';
    return error;
  }

    //validate errors
    if(err.message.includes("guest validation failed")){
       Object.values(err.errors).forEach(({properties})=> {
        error[properties.path] = properties.message;
       })
    }
    return error;
}
const maxAge = 3 * 24 * 60 * 60;
const createToken =(id,email,name,userName)=>{
  let typeOfUser='guestUser'
  return jwt.sign({id ,email,name,userName,typeOfUser}, 'masha aldossari secret',{
        expiresIn:maxAge
    });
}

//sign up a user

// router.post("/signup",async (req, res) => {
//     const {name,email,password,role} = req.body;
//     try{
      
//       const signup= await Users.create({name,email,password,role})
//        res.status(201).json({signup})
//     }
//     catch(err){

//         res.status(400).json({err})
//     }
   
// });

router.post("/signup",async (req, res) => {
    const {name,email, password} = req.body;
    try{
      
      const salt = await bcrypt.genSalt()
      let myPassword = await bcrypt.hash(password, salt)
      console.log(myPassword)
      const guestUser= await Users.create({name,email, password:myPassword})
      const token =createToken(guestUser._id,guestUser.email,guestUser.name)
      res.cookie('jwt',token,{httpOnly:true , maxAge: maxAge * 1000})
      res.status(200).json({guestUser:token})
    }
    catch(err){
      const error = handleError(err)

        res.status(400).json(error)
    }
    //console.log(email, password)
    //res.send('new signup');
});


//post for guesglogin
router.post("/login", async(req, res) => {
  const {email, password} = req.body;
  console.log("login")
  try{
    const guestUser= await Users.login(email, password)
    const token =createToken(guestUser._id,guestUser.email,guestUser.name)
    res.cookie('jwt',token,{httpOnly:true , maxAge: maxAge * 1000})
    res.status(200).json({guestUser:token})
  }
  catch(err){
      const errors = handleError(err);
    res.status(400).json({errors})
  }
});