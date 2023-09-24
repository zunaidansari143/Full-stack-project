import  express  from "express";
import bodyParser from "body-parser";
import { ProducteAPI,getProducte } from "../controllers/addprodacte controllers.js";

const router = express.Router();

router.get('/',ProducteAPI);
router.post('/add',getProducte);
// router.get('/',(req,res)=>{
//     res.send('This path  works')
// })

// router.get('/all-data',(req,res)=>{
//     res.send('hi, All the data  is show')
// })

export default router;


