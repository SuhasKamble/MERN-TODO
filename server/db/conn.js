import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config()

// db stuff
mongoose.connect(process.env.DB_URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Database is connected...");
}).catch((e)=>{
  console.log("Database is not connected..")  
})

