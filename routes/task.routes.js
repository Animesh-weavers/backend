const express = require("express");
const router = express.Router();

// Controllers.
const taskController = require("../controllers/task.controller");

// Task routes.
// Create a task.
router.post("/create", taskController.createTask);

// Update a task.
router.put("/update/:taskId", taskController.updateTask);

// Get all tasks.
router.get("/get", taskController.getAllTasks);

// Delete a task.
router.delete("/delete/:taskId", taskController.deleteTask);

module.exports = router;
