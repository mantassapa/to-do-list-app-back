const express = require("express")
const router = express.Router()
const {createToDo, getAllToDo, deleteToDo, updateToDo} = require("../controllers/toDoController")



router.post("/todo", createToDo)
router.get("/todo", getAllToDo)
router.put("/todo/:id", updateToDo)
router.delete("/todo/:id", deleteToDo)

module.exports = router