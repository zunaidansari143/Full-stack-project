import mongoose from "mongoose";
    // import bodyParser from "body-parser";

const userSchema = mongoose.Schema({
    // fisr_name: String,
    first_name:{
        type:String,
        required:false
    },
    last_name:{
        type:String,
        required:false
    },
    username:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:true
    },
    date_of_birth:{
        type:Date,
        required:false
    },   
    contact:{
        type:Number,
        required:false
    },
    create_at:{
        type:Date,
        default:  Date()
    }
})

const UserModle =mongoose.model('UserModle',userSchema)

export default UserModle;