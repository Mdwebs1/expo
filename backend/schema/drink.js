const mongoose = require('mongoose')
const Schema = mongoose.Schema


const drinkSchema = new Schema({
  
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


const Drink = mongoose.model("drink",drinkSchema)
module.exports = Drink 