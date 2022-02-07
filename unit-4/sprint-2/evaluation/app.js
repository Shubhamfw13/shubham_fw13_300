const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://shubham:13300@cluster0.npepp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
app.listen(3000, async () => {
  await connect();
  console.log("Listening on port 3000");
});

// userSchema

const userSchema = new mongoose.Schema(
  {
    id:{type:Number,unique:true,required:true},
    first_name: { type: String, required: true },
    middle_name: { type: String },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true }  
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
// usermodel

const User = mongoose.model("user", userSchema);

app.post("/user", async (req,res)=>{
    try{
     const user = await User.create(req.body);
     return res.status(200).send(user)
    }catch(err){
        return res.status(500).send(err.message)
    }
 })
 

 app.get("/user", async (req,res)=>{
    try{
     const user = await User.find().lean().exec();
     return res.status(201).send(user)
    }catch(err){
        return res.status(500).send(err.message)
    }
 })

 app.patch("/user/:id", async (req,res)=>{
    try{
     const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
     return res.status(201).send(user)
    }catch(err){
        return res.status(500).send(err.message)
    }
 })

 app.delete("/user/:id", async (req,res)=>{
    try{
     const user = await User.findByIdAndDelete(req.params.id,{new:true}).lean().exec();
     return res.status(201).send(user)
    }catch(err){
        return res.status(500).send(err.message)
    }
 })


// BranchSchema

const branchSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// BranchModel

const Branch = mongoose.model("branch", branchSchema);

// masterSchema
const masterSchema = new mongoose.Schema(
  {
    balance: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// mastermodel

const Master = mongoose.model("master", masterSchema);

// savings schema

const savingsSchema = new mongoose.Schema(
  {
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// savings model

const Savings = mongoose.model("savings", savingsSchema);

// fixed Schema

const fixedSchema = new mongoose.Schema({
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate : {type:Number, required:true},
    maturityDate : {type:Number, required:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
}, {
    versionKey: false,
    timestamps: true,
  });

// fixedmodel

const Fixed = mongoose.model("fixed",fixedSchema);

app.post("/fixed", async (req,res)=>{
    try{
     const fixed = await Fixed.create(req.body);
     return res.status(200).send(fixed)
    }catch(err){
        return res.status(500).send(err.message)
    }
 })

 app.get("/fixed/:id", async (req,res)=>{
    try{
     const fixed = await Fixed.find().populate({path:"user_id",select:["first_name","last_name","adress"]}).lean().exec();
     return res.status(200).send(fixed)
    }catch(err){
        return res.status(500).send(err.message)
    }
 })

 app.patch("/fixed/:id", async (req,res)=>{
    try{
     const fixed = await Fixed.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
     return res.status(201).send(fixed)
    }catch(err){
        return res.status(500).send(err.message)
    }
 })

 app.delete("/fixed/:id", async (req,res)=>{
    try{
     const fixed = await Fixed.findByIdAndDelete(req.params.id,{new:true}).lean().exec();
     return res.status(201).send(fixed)
    }catch(err){
        return res.status(500).send(err.message)
    }
 })