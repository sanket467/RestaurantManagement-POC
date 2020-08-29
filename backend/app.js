const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer();

const app = express();

const foodRoutes = require('./routes/food');
const tableRoutes = require('./routes/table');
const restRoutes = require('./routes/rest');

mongoose.connect("mongodb+srv://sanket:p8uUvN5gxYSJ9Dvy@cluster0.urxep.mongodb.net/restaurant?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connecting Successfully to DataBase !!!");
    })
    .catch(() => {
        console.log("Connection failed to DB");
    });

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

app.use(upload.array());
app.use(express.static('public'));



app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST ,PUT,  PATCH, DELETE, OPTIONS"
    );
    next();

});

app.use("/api/foods", foodRoutes);
app.use("/api/table", tableRoutes);
app.use("/api/rest", restRoutes);

module.exports = app;
