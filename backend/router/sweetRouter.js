const express = require("express");
let router = express.Router();
module.exports = router ;

const Sweet = require('../schema/sweet')


//get for Sweet
router.get("/sweets", (req, res) => {
   
    Sweet.find({}, (err, sweet) => {
      res.send(sweet);
       });
});



router.get("/orders/:id", (req, res)=>{
    Sweet.find({_id:req.params.id}).then((order) => {

        res.send(order)
    })
})

//POST FOR CHOSE ORDER
router.post("/orders", (req, res) => {
   
    Sweet.find({_id:req.body.id}).then((order) => {

        res.send(order)
    })

})

//post for Sweet
router.post("/sweets",async (req, res) => {
    const {name,price,image} = req.body;
    try{
      
      const sweetUser= await Sweet.create({name,price,image})
       res.status(201).json({sweetUser})
    }
    catch(err){

        res.status(400).json("error")
    }
   
});

router.patch("/updateSweets/:id",async (req, res) =>{
    const allowedUpdates = ["name","price","image"];
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation) {
        return res.status(400).send( 'Invalid updates');
    }else{
        try{
            const sweet = await Drink.findByIdAndUpdate({_id: req.params.id},{name:req.body.name,price:req.body.price,image:req.body.image})
                  
            await sweet.save()
                    Sweet.find({}).then((allSweets)=>{

                        res.status(200).send(allSweets)
                    })
                

            // find id passed into the function
            if(!sweet) {return res.status(404).send(404).send()}
          
          
        } catch(e){
            res.status(400).send(e)
        }       
    }
    


})
//delete
router.delete("/deleteSweets/:id", (req, res) => {
    Sweet.deleteOne({_id:req.params.id}, ( ) => {
        Sweet.find({}, (err, sweet) => {
            res.send("deleted");
            });
  
        });
  });