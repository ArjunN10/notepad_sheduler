
require('dotenv').config()
const express=require("express")
const app=express()
const port=3003
const mongoose=require("mongoose")
const cors=require("cors")
const userRoute=require("./routes/userRoutes")

mongoose.connect(process.env.MDB_URL).then(()=>console.log("DB connected"))

app.use(cors())
app.use(express.json())

app.use('/api/user',userRoute)

app.listen(port,(err)=>{
if(err){
    console.log("Error");
}console.log(`Server is listening to port:${port}`);
})

