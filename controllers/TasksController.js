const Task = require("../models/Task.js");

const newTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json({ task });
    if (!task) {
      return res.status(404).json("Task not found");
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const editTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json("Successfully updated");
    if (!task) {
      return res.status(404).json("Task not found");
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const removeTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete(req.params.id);
    res.status(200).json("Task successfully deleted");
    if (!task) {
      return res.status(404).json("Task not found");
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  newTask,
  editTask,
  removeTask,
};
