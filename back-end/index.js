 import express  from 'express';
 import mongoose from 'mongoose';
 import bodyParser from 'body-parser';
 import cors from 'cors';
 
 import ProducttRouter from './routes/Addproduct.js'
 import userRouter from './routes/User.js'

 import cron from "node-cron"
 import nodemailer from "nodemailer"


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const postRouter = require('./routes/poste.js')




const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/user',userRouter);
app.use('/product',ProducttRouter);



//connection with dataBAse

const  url = 'mongodb+srv://zunaidansari688:qcxNBZT54di0G4cU@zunaidansari.im7d4ex.mongodb.net/?retryWrites=true&w=majority'
//const  url = 'mongodb+srv://zunaidansari688:qcxNBZT54di0G4cU@zunaidansari.im7d4ex.mongodb.net/'
// const  url = 'mongodb+srv://zunaidansari688:qcxNBZT54di0G4cU@zunaidansari.im7d4ex.mongodb.net/'
const port = process.env.PORT || 8080;
mongoose.connect( url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port,()=>{
        console.log(`server is up and running on port ${port}`);
    }))
    .catch((err) => { 
        console.log("error", err.message);
    })





// cron.schedule('* * * * * ', () => {
//     console.log('running a task every minute');
//   });

 
 
// let mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'zunaidansari688@gmail.com',
//         pass: 'dnelvwunbtwtjoov'
//     }
// });
 
// let mailDetails = {
//     from: 'zunaidansari688@gmail.com',
//     to: 'jubairali5555@gmail.com,sahilkhan967532@gmail.com',
//     subject: 'Test mail',
//     text: 'Node.js testing mail for GeeksforGeeks'
// };
 
// mailTransporter.sendMail(mailDetails, function(err, data) {
//     if(err) {
//         console.log('Error Occurs');
//     } else {
//         console.log('Email sent successfully');
//     }
// });


