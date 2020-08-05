const TodoModel = require("../model/todo.model");



exports.createTodo = async (req, res, next) => {
  try {
    const createdModel = await TodoModel.create(req.body);
    res.status(201).json(createdModel);
  } catch (err) {
    next(err);
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    const allTodos = await TodoModel.find({});
    res.status(200).json(allTodos);
  }
  catch(err)
  {
      next(err);
  }
};

exports.getTodoById = async (req, res, next) => {
   try{
    const todoModel = await TodoModel.findById(req.params.todoId);
    if(todoModel){
        res.status(200).json(todoModel);
    }
    else{
        res.status(404).send();
    }
   }
   catch(err)
   {
       next(err);
   }
};

exports.findByIdAndUpdate = async (req, res, next) => {
  try {
    const updateModel = await TodoModel.findByIdAndUpdate(req.body._id, req.body);
    res.status(201).json(updateModel);
  } catch (err) {
    next(err);
  }
};


exports.findByIdAndRemove = async (req, res, next) => {
  try {
    const deleteModel = await TodoModel.findByIdAndRemove(req.body._id);
    res.status(201).json(deleteModel);
  } catch (err) {
    next(err);
  }
};