import mongoose from "mongoose";
    // import bodyParser from "body-parser";
const producteSchema = mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String,
 })

const producteModle = mongoose.model('producteModle',producteSchema);



export default producteModle;