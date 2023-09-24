 import UserModle from "../models/userModels.js";
 import jwt from 'jsonwebtoken'
 import bcrypt from "bcrypt"



 export const getuserController = (req, res) =>{
    console.log('user fetched  form controller');
    res.send('user fetched  form controller');   
}


 export const createUser = async (req,res) =>{
    const user =req.body;
    const newUser= new  UserModle(user);
    // console.log(user);
    const sec_key = "864f2b2f";

        //console.log(req.body);
        const email= req.body.email
        const username=req.body.username
        const password=req.body.password

        try{
            const emailExist= await UserModle.findOne({
                email:email
            })
            const usernameExist =await UserModle.findOne({
                username:username
            })
            // const empatypassword =await UserModle.findOne({
            //     password:" "
            // })
            
            if(emailExist){
                return res.status(406).json({
                    message:`Email ${email} already Exist!`
                })
            }
            if(usernameExist){
                return  res.status(406).json({
                    message:`username ${username} already taken!`
                })
            }
            // if(empatypassword ){
            //     return res.status(406).json({
            //         message:"please check your password"
            //     })
            // }

            const hashedPassword = await bcrypt.hash(password, 10);
            newUser.password = hashedPassword;
            const token = jwt.sign(email , sec_key);
            await newUser.save();
            res.status(201).json({
                message:"Useer created successfully!",
                result:newUser,
                Token:token
            });
        }

    catch(arr){
        res.status(409).json({
            message:arr.message,
        });
        console.log(arr.message,"Semthing went wrong");       
    }

 }
 
 


export const getallUsers = async (req, res) =>{
    try{
        const user = await UserModle.find({});
        res.status(200).json({
            message:"User get successfully!",
            result:user,
        })

    }
    catch (err){
        res.status(409).json({
            message:res.message,
        })
    }
}


export const getUserId = async (req, res) =>{
    const id = req.params.id
   // console.log("id",id);

    try{
        const user = await UserModle.findOne({
            _id:id
        });
        res.status(200).json({
            message:'User fetched',
            result:user
        });
    //    console.log("id path is working")

    }
    catch(arr){
        res.status(402).json({
            message:res.message,
        })
      //  console.log(arr.message,"Semthing went wrong");     
    }
}


 export  const deleteUser = async (req, res) =>{
      
    const id =req.params.id;
    //console.log("id",id);

    try{
        const deleteduser= await UserModle.deleteOne({
            _id:id
        })        
        if(deleteduser.deletedCount === 0 ){
        return res.status(404).json({
                message:"id not found"
            })
        }
        res.status(200).json({
            message:"User delete successfully",
            result:deleteduser
        })
    }
    catch(err){
        res.status(402).json({
            message:`${err}something went wrong`
        })
    }
}


export const userLogin = async (req,res) =>{

    const email = req.body.email;
    const password = req.body.password;
//  console.log("login api email working",email)
     const sec_key = "864f2b2f";



    try{
        const Userid= await UserModle.findOne({
            email:email
        })
        if(!Userid){
           return res.status(402).json({
                message:"user dose not Exist"
            })            
        }

            // const userpassword = Userid.password
            // // const userpassword = await UserModle.findOne({
            // //     password:password === password
            // // })         
            // const result = password === userpassword

            const isPasswordValid = await bcrypt.compare(password, Userid.password);
            if(!isPasswordValid){
              return  res.status(404).json({
                    message:"invalid Credentials"
               }               
            ) 
        } 

        const token = jwt.sign(email , sec_key);

        return res.status(200).json({
            message:"Login successfullly",
            Token: token,
            user:Userid
        })    
        
    }
    catch(err){
        res.status(402).json({
            message:err.message
        })
        console.log("login api not working")
    }
}


 export  const UpdeteUser = async (req, res)=> {
    // res.send("update  api is working")
    const id=req.params.id
    const updateUser=req.body
    //  const last_name =req.body.last_name
    //  const password =req.body.password
    // console.log("ok,",id,updateUser)

    try{
        const result = await UserModle.findByIdAndUpdate(id,updateUser)
        res.status(200).json({
            message:"updated successfully",
            result:updateUser
        })
        // console.log("rs",result)
    }

    catch(err){
        res.status(404).json({
            message:`${err},somthing is wrong`
        })
    }
}





// module.exports ={

// };