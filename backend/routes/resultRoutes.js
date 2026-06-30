const router=require("express").Router();


const Result=require("../models/Result");




// ADD RESULT

router.post("/",async(req,res)=>{


const data =
await Result.create(req.body);


res.json(data);


});




// SEARCH RESULT


router.get("/:id",async(req,res)=>{


const data =
await Result.findOne({

studentId:req.params.id

});


res.json(data);


});



module.exports=router;