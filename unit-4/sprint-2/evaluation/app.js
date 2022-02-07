const express = require("express")
const mongoose = require("mongoose")
const app = express()

const connect = ()=>{
    return mongoose.connect("mongodb+srv://shubham:13300@cluster0.npepp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
}
app.listen(2000,async()=>{
    await connect()
    console.log("Listening on port 2000")
})

const userSchema = new mongoose.Schema({
    id : {type: Number, unique : true , required : true},
    first_name : {type: String, required : true},
    middle_name : {type: String},
    last_name : {type: String, required : true},
    age : {type:Number, required:true},
    email : {type:String, required:true },
    address : {type:String, required:true},
    gender : {type: String, required: true},
    type : {type : String}
},{
    versionKey : false,
    timestamps : true
})