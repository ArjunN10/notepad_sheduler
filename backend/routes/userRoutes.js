
const express=require("express")
const router=express.Router()
const userController=require("../controllers/userController")
const TrycatchMiddleware = require("../middlewares/TryCatch")

router
.post("/register",TrycatchMiddleware(userController.userRegister))

module.exports=router











