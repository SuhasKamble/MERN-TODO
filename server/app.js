import express from 'express'
import dotenv from 'dotenv';
dotenv.config()
import cookie from 'cookie-parser'
import router from './router/router.js'
import './db/conn.js'



// creating the app 
const app = express();
const port = process.env.PORT;
app.use(express.json())
app.use(cookie())
app.use(router)


// router 
app.get("/",(req,res)=>{
    res.send("Hello world!")
})


// listening to the port
app.listen(5000,()=>{
    console.log(`Listening to the port 5000`)
})
