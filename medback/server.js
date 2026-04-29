require("dotenv").config();
const express=require('express');
const dotenv=require('dotenv')
const chatRoute=require('./routes/chat')


dotenv.config(); // to generate the process.env object notation 
const cors=require('cors'); 

const userRoute=require('./routes/userRoute');
const doctorRoute=require('./routes/doctorRoute');
const appointmentRouter = require("./routes/appointmentRouter");


const app=express(); 

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
console.log("userRoute:", typeof userRoute);
console.log("doctorRoute:", typeof doctorRoute);
console.log("appointmentRouter:", typeof appointmentRouter);
console.log("GROQ KEY:", process.env.GROQ_API_KEY);


//register route 

app.use('/med',userRoute);
app.use('/doctor',doctorRoute);
app.use('/appointments', appointmentRouter);
app.use('/api/chat', chatRoute);


app.get('/',(req,res)=>{
    res.send('Hello from JWT3 App Server');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running in the port ${PORT}`);
});