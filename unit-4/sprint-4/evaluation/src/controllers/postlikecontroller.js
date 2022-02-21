const express = require("express");
const router = express.Router();
const PostLike = require("../models/postlikemodel")
const crudController = require("./crudcontrollers")

router.post("",crudController(PostLike).post)
router.get("",crudController(PostLike).getAll)
router.get("/:id",crudController(PostLike).getOne)
router.patch("/:id",crudController(PostLike).patch)
router.delete("/:id",crudController(PostLike).Delete)

module.exports = router;