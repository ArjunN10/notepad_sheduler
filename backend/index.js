require('dotenv').config()
const express=require("express")
const app=express()
const cors=require('cors')
const port=3003
const mongoose=require('mongoose')
const userRoute=require('./routes/userRoutes')


mongoose.connect(process.env.MDB_URL).then(()=>console.log("DB Connected"))


app.use(express.json())
app.use(cors())



app.use('/',userRoute)



app.listen(port,(err)=>{
if(!err){
    console.log(`Server is connected to port : ${port}`)
}else{
    console.log("error"+err)
}
})
