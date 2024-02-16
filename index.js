require('dotenv').config()
const express=require('express')
const cors=require('cors')
const router = require('./Routes/routes')
require('./DB/connection')
const regServer=express()
// const mongoose=require('mongoose')


// const students=require('./registerModel')
regServer.use(cors())
regServer.use(express.json())
regServer.use(router)


const PORT = 3000 || process.env.PORT

regServer.listen(PORT,()=>{
    console.log(`Project fair server started at port: ${PORT}`);
})
// listen - to host

regServer.get('/',(req,res)=>{
    res.status(200).send("<h1 style=color:red;>Project fair server started!!! Waiting for Client Request...</h1>")
})