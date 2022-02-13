const express = require("express");
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()
const cookieParser = require('cookie-parser');
const drinkRouter = require("./router/drinkRouter.js")
const sweetRouter = require("./router/sweetRouter.js")
const users = require("./router/usersRouter.js")




app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



//router
app.use('/drinkRouter',drinkRouter)
app.use('/sweetRouter',sweetRouter)
app.use('/usersRouter',users)


// cookies

app.get('/set-cookies', (req, res) => {
  //  res.setHeader('Set-Cookie','newAuther=true')
  res.cookie('newAuther',false)
  res.cookie('isAuther',true,{maxAge:1000 * 60 * 60 * 24 , httpOnly:true})
    res.send('you got the new cookie')
})

app.get('/read-cookies', (req, res) => {
    const cookies = req.cookies
    console.log(cookies.newAuther)
    res.json(cookies)
})

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













