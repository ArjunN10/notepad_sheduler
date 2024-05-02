// const mongoose=require("mongoose")


// const userSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,
//         required:true
//     },
//     passwprd:{
//         type:String,
//         required:true
//     },
// })


// module.exports=mongoose.model('user',userSchema)


const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    notes:{
        type:mongoose.Schema.ObjectId,
        ref:"notes"
    }
})

module.exports=mongoose.model("user",userSchema)


