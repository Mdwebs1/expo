const express = require("express");
let router = express.Router();
module.exports = router ;

const Drink = require('../schema/drink')


//get for Drink
router.get("/drinks", (req, res) => {
   
    Drink.find({}, (err, drink) => {
      res.send(drink);
       });
});

//post for Drink
router.post("/drinks",async (req, res) => {
    const {name,price,image} = req.body;
    try{
      
      const drinkUser= await Drink.create({name,price,image})
       res.status(201).json({drinkUser})
    }
    catch(err){

        res.status(400).json("error")
    }
   
});

router.get("/orders/:id", (req, res)=>{
    Drink.find({_id:req.params.id}).then((order) => {

        res.send(order)
    })
})

//POST FOR CHOSE ORDER
router.post("/orders", (req, res) => {
   
    Drink.find({_id:req.body.id}).then((order) => {

        res.send(order)
    })

})


router.patch("/updateDrinks/:id",async (req, res) =>{
    const allowedUpdates = ["name","price","image"];
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation) {
        return res.status(400).send( 'Invalid updates');
    }else{
        try{
            const drink = await Drink.findByIdAndUpdate({_id: req.params.id},{name:req.body.name,price:req.body.price,image:req.body.image})
                  
            await drink.save()
                    Drink.find({}).then((allDrinks)=>{

                        res.status(200).send(allDrinks)
                    })
                

            // find id passed into the function
            if(!drink) {return res.status(404).send(404).send()}
          
          
        } catch(e){
            res.status(400).send(e)
        }       
    }
    


})
//delete
router.delete("/deleteDrinks/:id", (req, res) => {
    Drink.deleteOne({_id:req.params.id}, ( ) => {
        Drink.find({}, (err, drink) => {
            res.send("deleted");
            });
  
        });
  });