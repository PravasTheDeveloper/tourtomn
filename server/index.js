const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const cookieParser = require("cookie-parser")

dotenv.config({path:"./config.env"})

require("./database/conn")

app.use(express.json())
app.use(cookieParser())
app.use(require("./routes/routes"))

app.listen(5000 , () => {
    console.log("Running in localhost:5000")
})