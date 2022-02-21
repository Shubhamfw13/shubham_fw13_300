const express = require("express");
const router = express.Router();
const Post = require("../models/postmodel")
const crudController = require("./crudcontrollers")
const path = require("path")

router.post("",crudController(Post).post)

router.get("/:id",crudController(Post).getOne)
router.patch("/:id",crudController(Post).patch)
router.delete("/:id",crudController(Post).Delete)

router.get("", async(req,res)=>{
    try{
        const post = await Post.find().populate({path:"user_id"}).limit(10).lean().exec()
        return res.send(post)
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports = router;