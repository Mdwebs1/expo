const express = require("express");
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()
const drinkRouter = require("./router/drinkRouter.js")
const sweetRouter = require("./router/sweetRouter.js")




app.use(express.json());
app.use(cors());

//router
app.use('/drinkRouter',drinkRouter)
app.use('/sweetRouter',sweetRouter)

//PORT
const PORT = process.env.PORT || 8080;

//conect db
const uri =
  "mongodb+srv://masha:mesh_r1995@masha.lhput.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.listen(PORT,()=>{
  
});













