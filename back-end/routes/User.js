import express from 'express';
import {createUser,getallUsers,getuserController,getUserId ,deleteUser,userLogin,UpdeteUser} from '../controllers/userControllers.js';


const router = express.Router();

router.get('/',getuserController);

router.get('/get-All',getallUsers);

router.post('/create-user',createUser)

router.get('/getUser/:id',getUserId)

router.delete('/delete/:id', deleteUser)

router.post('/login',userLogin)

router.put('/update/:id',UpdeteUser)


// router.get('/post' )
// const router = express.Router();

// router.get('/',(req,res)=>{
//     res.send('This path  works')
// })

// router.get('/get-all',(req,res)=>{
//     res.send('hi, All the data  is show')
// })

export default router;