const router=require('express').Router()
const userController=require('../controllers/userController')
const verifyToken=require("../middlewares/userAuth")
const TrycatchMiddleware=require("../middlewares/TryCatch")

router
//<------------ Register route -------------->

.post('/register',TrycatchMiddleware(userController.userRegister))

//<------------ Login route -------------->

.post('/',TrycatchMiddleware(userController.userLogin))

.use(verifyToken)

//<------------ CRUD on note  -------------->
.post('/api/notes/createnote',TrycatchMiddleware(userController.CreateNotes))
.get('/api/notes/:id',TrycatchMiddleware(userController.DisplayNotes))
.delete('/api/notes/:id',TrycatchMiddleware(userController.DeleteNotes))
.post('/api/notes/:id',TrycatchMiddleware(userController.EditNotes))


module.exports=router












