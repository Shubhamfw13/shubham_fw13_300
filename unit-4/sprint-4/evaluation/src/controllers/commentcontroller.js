const express = require("express");
const router = express.Router();
const Comment = require("../models/commentmodel")
const crudController = require("./crudcontrollers.js");
const path = require("path")

router.post("",crudController(Comment).post)
router.get("",crudController(Comment).getAll)
router.get("/:id",crudController(Comment).getOne)
router.patch("/:id",crudController(Comment).patch)
router.delete("/:id",crudController(Comment).Delete)

router.get("", async(req,res)=>{
    try{
        const comment= await Comment.find().populate({path:"user_id"}).populate({path:"post_id"}).lean().exec()
        return res.send(comment)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports = router;

