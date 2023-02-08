const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTaskById,
  newTask,
  editTask,
  removeTask,
} = require("../controllers/TasksController");

router.route("/").get(getAllTasks).post(newTask);
router.route("/:id").get(getTaskById).patch(editTask).delete(removeTask);

module.exports = router;
