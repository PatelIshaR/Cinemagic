const express = require('express')
const app = express()
require('./database/connection')
require('dotenv').config();
const cookieParser = require("cookie-parser")

const userRouter = require('./routes/auth')
const cors = require("cors")
const port = 5000

// app.get("/", (req,res)=>{
//     res.status(201).json("server created")
// })

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(userRouter)

app.listen(port,()=>{
    console.log(`Server start at port no: ${port}`)
})