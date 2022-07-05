const TaskModel = require("../models/TaskModel");

// Task creation controller.
const createTask = async (req, res) => {
  try {
    const task = await TaskModel({
      taskName: req.body.taskName,
      reminderTime: req.body.reminderTime,
      reminderDate: req.body.reminderDate,
    });

    const createdTask = await task.save();

    if (createdTask) {
      res.status(201).send({
        serverResponse: {
          code: 201,
          message: "Task created successfully.",
        },
        result: {
          Data: task,
        },
      });
    } else {
      res.status(500).send({
        serverResponse: {
          code: 500,
          messaeg: "Internal Server Error.",
        },
      });
    }
  } catch (error) {
    throw error;
  }
};

// Task updation controller.
const updateTask = async (req, res) => {
  try {
    const task = await TaskModel.findOne({ _id: req.params.taskId });

    if (task) {
      task.taskName = req.body.taskName || task.taskName;
      task.reminderTime = req.body.reminderTime || task.reminderTime;
      task.reminderDate = req.body.reminderDate || task.reminderDate;

      const updatedTask = await task.save();

      if (updatedTask) {
        res.status(201).send({
          serverResponse: {
            code: 201,
            message: "Task updated successfully.",
          },
          result: {
            Data: updatedTask,
          },
        });
      } else {
        res.status(500).send({
          serverResponse: {
            code: 500,
            messaeg: "Internal Server Error.",
          },
        });
      }
    }
  } catch (error) {
    throw error;
  }
};

// Get all tasks controller.
const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find({});

    if (tasks) {
      res.status(201).send({
        serverResponse: {
          code: 201,
          message: "Tasks found successfully.",
        },
        result: {
          Data: tasks,
        },
      });
    } else {
      res.status(500).send({
        serverResponse: {
          code: 500,
          messaeg: "Internal Server Error.",
        },
      });
    }
  } catch (error) {
    throw error;
  }
};

// Delete a task controller.
const deleteTask = async (req, res) => {
  try {
    const task = await TaskModel.findOneAndDelete({ _id: req.params.taskId });

    if (task) {
      res.status(201).send({
        serverResponse: {
          code: 201,
          message: "Task deleted successfully.",
        },
      });
    } else {
      res.status(500).send({
        serverResponse: {
          code: 500,
          messaeg: "Internal Server Error.",
        },
      });
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { createTask, updateTask, getAllTasks, deleteTask };
