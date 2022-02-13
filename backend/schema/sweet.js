const mongoose = require('mongoose')
const Schema = mongoose.Schema


const sweetSchema = new Schema({
  
    name:{
        type: String,
        required: [true, "name should be provided"]
    },
    price:{
        type: Number,
    },
    image:{
        type:String
     }

})


const Sweet = mongoose.model("sweet",sweetSchema)
module.exports = Sweet 