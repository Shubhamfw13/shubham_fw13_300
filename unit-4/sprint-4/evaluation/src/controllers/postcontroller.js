const express = require("express");
const router = express.Router();
const Post = require("../models/postmodel")
const crudController = require("./crudcontrollers")

router.post("",crudController(Post).post)
router.get("",crudController(Post).getAll)
router.get("/:id",crudController(Post).getOne)
router.patch("/:id",crudController(Post).patch)
router.delete("/:id",crudController(Post).Delete)

module.exports = router;