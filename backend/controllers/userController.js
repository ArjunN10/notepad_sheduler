// const bcrypt=require('bcrypt')
// const jwt  = require('jsonwebtoken')
// const notesSchema=require("../models/notesSchema")
// const userSchema=require("../models/userSchema") 


// module.exports={


// userRegister:async(req,res)=>{

//     try {
//         const {name,email,password}=req.body;
 
//     console.log(name,"name")

//         const hashpassword=await bcrypt.hash(password,10)
//         await userSchema.create({
//            name:name,
//            email:email,
//            password:hashpassword,
//         });

//         res.status(201).json({
//             status: "success",
//             message: "User registration successful",
//         });
//     } catch (error) {
//         res.status(500).json({
//             status: "Error",
//             message: "Internal Server Error",
//         });
//     }

// },

// userLogin:async(req,res)=>{
//     const {value}=req.body
//     try {
//         const {email,password}=value
//         if(email === email || password=== password){
//             res.status(200).json({
//                 status:"success",
//                 message:"User Login Successfull"
//             })
//             const token=jwt.sign(
//                 {email:email},
//                 process.env.USER_ACCESS_TOKEN_SECRET,
//                 {expiresIn:600}

//             )
//         }else{
//             res.status(403).json({
//                 error:"failure",
//                 message:"User Login Failed" ,
//                 token:token

//             })
//         }
    
// } catch (error) {
//     console.log(error)
// }
// },

// CreateNotes:async(req,res)=>{
  
//     const {noteheader,notebody}=req.body
//  const notesdata=new notesSchema({

//             noteheader:noteheader,
//             notebody:notebody
//         })

//         await notesdata.save()
        
//         res.status(200).json({
//             status:"success",
//             message:"Notes Created Successfully"
//         })
   
// }, 



// DeleteNotes:async(req,res)=>{
//     const {id}=req.params
//     try {
//       await notesSchema.findByIdAndDelete({_id:id})
//       res.status(200).json({
//         status:"success",
//         message:"note deleted successfully"
//       })
//     } catch (error) {
//         res.status(403).json({
//             status:"failure",
//             message:"error on deleting note"
//         })
//     }
// },

// EditNotes:async(req,res)=>{
//     const {id}=req.params
//     const {noteheader,notebody}=req.body
//     try {
//         await notesSchema.findByIdAndUpdate({_id:id},{$set:{noteheader:noteheader,notebody:notebody}})
//     } catch (error) {
        
//     }
// },

// DisplayNotes:async(req,res)=>{
//     const notes=await notesSchema.findById()
//     if(!notes){
//         return res.status(404).json({
//             status:"error",
//             message:"Notes not found"
//         })
//     }
//     return res.status(200).json({
//         status:"success",
//         message:"notes Fetched Successfully",
//         data:notes
//     })
// }





// }






const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const userSchema=require("../models/userSchema")

module.exports={


    userRegister:async(req,res)=>{
        try {
            const {name,email,password}=req.body
            // await userSchema.create({
            //     name:name,
            //     email:email,
            //     password:password
            // })
            const hashedpassword=await bcrypt.hash(password,10)
            const user=new userSchema({
                name:name,
                email:email,
                 password:hashedpassword
            })
    
           await user.save()
    
        res.status(200).json({
            status:"Success",
            message:"registarion successfull"
        })
            
        } catch (error) {
            res.status(403).json({
                error:"error"
            })
        }

   

    },

}







