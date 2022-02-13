const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {isEmail} = require('validator')
const bcrypt= require('bcrypt')


const usersSchema = new Schema({
  
    name:{
        type: String,
       
    },
    email:{
        type:String,
        required: [true, " email should be provided"],
        unique: true,
        lowercase: true,
        validate:[isEmail,"is invalid"]
    },
    password:{
    type:String,
    minLength:[6,"pass more than 6"],
    required: [true, "pass should be provided"],
 },
//  role:{
//      type:String,
//      enum:["admin", "user"],
//      default:'admin',
//  }

})

usersSchema.post('save', function (doc, next) {
    console.log('new user was created & saved', doc);
    next()
})

usersSchema.statics.login = async function (email,password){
    
    const user= await this.findOne({ email: email});
    if(user){
       const userers= await bcrypt.compare(password,user.password)
       if(userers){
           return user
       }
       throw Error('incorect password')
    }
    throw Error('incorect email')
}


const Users = mongoose.model("users",usersSchema)
module.exports = Users 