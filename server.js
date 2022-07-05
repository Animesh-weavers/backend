const express = require('express');
const dbConnection = require('./configs/dbConnection.config');
const routes = require('./routes/index');
const app = express();

// MongoDB connection.
dbConnection.DBconnect()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

const PORT = 5000
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}...`)
})
