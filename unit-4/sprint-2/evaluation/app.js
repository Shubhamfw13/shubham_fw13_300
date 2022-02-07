const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://shubham:13300@cluster0.npepp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
app.listen(2000, async () => {
  await connect();
  console.log("Listening on port 2000");
});

// userSchema

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true, required: true },
    first_name: { type: String, required: true },
    middle_name: { type: String },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    type: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
// usermodel

const User = mongoose.model("user", userSchema);

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

const fixedSchema = new mongoose.STATES({
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    starDate : {type:Number, required:true},
    maturityDate : {type:Number, required:true}
});

// fixedmodel

const Fixed = mongoose.model("fixed",fixedSchema);

app.get("user", async (req,res)=>{
    const user = await User.create(req.body)
    ret
})
