const mongoose=require("mongoose");


const resultSchema=new mongoose.Schema({

studentId:{
type:String,
unique:true
},

name:String,


department:String,


subjects:[

{

subject:String,

mark:Number

}

],


total:Number,


grade:String


});


module.exports=
mongoose.model(
"Result",
resultSchema
);