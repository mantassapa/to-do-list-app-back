const ToDo = require("../models/toDoModel");
const asyncHandler = require("express-async-handler");



//POST todo
//api/todo
const createToDo = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    start,
    end,
    added,
    updated,
    finished,
  } = req.body;

  const toDo = await ToDo.create({
    title,
    description,
    start,
    end,
    added,
    updated,
    finished,
  });
  if (toDo) {
    res.status(201).json({
      _id: toDo.id,
      title: toDo.title,
      description: toDo.description,
      start: toDo.start,
      end: toDo.end,
      added: toDo.added,
      updated: toDo.updated,
      finished: toDo.finished,
    });
  } else {
    res.status(403);
  }
});


//GET all Todo's
//api/todo
const getAllToDo = asyncHandler(async (req, res) => {
  const allToDo = await ToDo.find();
  if (!allToDo) {
    res.status(404).json(allToDo);
    return; 
  }
  res.status(200).json(allToDo);
});


//Update todo
//api/todo:id
const updateToDo = asyncHandler(async(req,res)=>{
  const findOne = await ToDo.findById(req.params.id)
  if(!findOne){
    res.status(404).send("task not found")
    return
  }
  findOne.title = req.body.title
  findOne.description = req.body.description
  findOne.start = req.body.start
  findOne.end = req.body.end
  findOne.updated = req.body.updated
  findOne.finished = req.body.finished
  findOne.save()
  res.status(200).json(findOne)
});

//DELETE todo
//api/todo:id

const deleteToDo = asyncHandler(async (req,res)=>{
  const findOne = await ToDo.findById(req.params.id)
  if(!findOne){
    res.status(404).send("task not found")
    return
  }
  const theOne = await ToDo.deleteOne({_id: req.params.id})
  res.status(200).json(theOne)
});

module.exports = { createToDo, getAllToDo, updateToDo, deleteToDo }
