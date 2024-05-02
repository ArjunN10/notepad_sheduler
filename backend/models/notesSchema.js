const mongoose=require("mongoose")


const notesSchema=new mongoose.Schema({
    noteheader:{
        type:String,
        required:true
    },
    notebody:{
        type:String,
        required:true
    }
   
})


module.exports=mongoose.model('notes',notesSchema)







