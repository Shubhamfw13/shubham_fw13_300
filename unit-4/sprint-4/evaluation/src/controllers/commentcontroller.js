const express = require("express");
const router = express.Router();
const Comment = require("../models/commentmodel")
const crudController = require("./crudcontrollers.js");

router.post("",crudController(Comment).post)
router.get("",crudController(Comment).getAll)
router.get("/:id",crudController(Comment).getOne)
router.patch("/:id",crudController(Comment).patch)
router.delete("/:id",crudController(Comment).Delete)

module.exports = router;