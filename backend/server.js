require("dotenv").config();

const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");


const app=express();


app.use(cors());

app.use(express.json());



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
console.log("MongoDB Connected")
})



const resultRoute=require("./routes/resultRoutes");


app.use("/api/result",resultRoute);



app.get("/",(req,res)=>{

res.send("Server Running")

});




app.listen(
process.env.PORT,
()=>console.log("Server 5000")
);