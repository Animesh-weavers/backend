const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  taskName: {
    type: String,
  },
  reminderTime: {
    type: String,
  },
  reminderDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Task", taskSchema);
