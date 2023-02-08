const Task = require("../models/Task.js");

const newTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getAllTasks = (req, res) => {
  res.send("all items from TasksController");
};

const getTaskById = (req, res) => {
  res.json({ id: req.params.id });
};

const editTask = (req, res) => {
  res.send("edit task");
};

const removeTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  getTaskById,
  newTask,
  editTask,
  removeTask,
};
