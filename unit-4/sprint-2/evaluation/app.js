const express = require("express")
const mongoose = require("mongoose")
const app = express()

const connect = ()=>{
    return mongoose.connect("mongodb+srv://shubham:<password>@cluster0.npepp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}