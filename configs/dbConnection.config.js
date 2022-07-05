const mongoose = require("mongoose");

module.exports.DBconnect = async () => {
  mongoose.connect('mongodb+srv://admin:admin@cluster0.c6saeit.mongodb.net/?retryWrites=true&w=majority');
  mongoose.connection
    .once("open", () => console.log("Connected to DB..."))
    .on("err", (err) => {
      throw err;
    });
};
