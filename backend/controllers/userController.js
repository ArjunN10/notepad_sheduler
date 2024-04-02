const bcrypt=require('bcrypt')
const jwt  = require('jsonwebtoken')
const notesSchema=require("../models/notesSchema")
const userSchema=require("../models/userSchema") 


module.exports={

userRegister:async(req,res)=>{

    console.log("first")

  const {value,error}=req.body;

    console.log(value,"value")

        if(error){
           return res.status(403).json({
                status:"error",
                message:"error"
            })
        }

    try {
        const { name, email, password } = value;
        await userSchema.create({
            name,
            email,
            password,
        });

        res.status(201).json({
            status: "success",
            message: "User registration successful",
        });
    } catch (err) {
        res.status(500).json({
            status: "Error",
            message: "Internal Server Error",
        });
    }

},

userLogin:async(req,res)=>{
    const {value}=req.body
    try {
        const {email,password}=value
        if(email === email || password=== password){
            res.status(200).json({
                status:"success",
                message:"User Login Successfull"
            })
            const token=jwt.sign(
                {email:email},
                process.env.USER_ACCESS_TOKEN_SECRET,
                {expiresIn:600}

            )
        }else{
            res.status(403).json({
                error:"failure",
                message:"User Login Failed" ,
                token:token

            })
        }
    
} catch (error) {
    console.log(error)
}
},

CreateNotes:async(req,res)=>{
    try {
        const {noteheader,notebody}=req.body
        await notesSchema.create({
            noteheader: noteheader,
            notebody:notebody
        })
        res.status(200).json({
            status:"success",
            message:"Notes Created Successfully"
        })
        
    } catch (error) {
        res.status(403).json({
            error:"failure",
            message:"Error creating Note"  
        })
    }
},

DeleteNotes:async(req,res)=>{
    const {id}=req.params
    try {
      await notesSchema.findByIdAndDelete({_id:id})
      res.status(200).json({
        status:"success",
        message:"note deleted successfully"
      })
    } catch (error) {
        res.status(403).json({
            status:"failure",
            message:"error on deleting note"
        })
    }
},

EditNotes:async(req,res)=>{
    const {id}=req.params
    const {noteheader,notebody}=req.body
    try {
        await notesSchema.findByIdAndUpdate({_id:id},{$set:{noteheader:noteheader,notebody:notebody}})
    } catch (error) {
        
    }
},





}















