const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Table = require('../models/tableModel');




router.post("/addTable/", (req, res, next) => {


    for (let i = 1; i <= req.body.quant; i++) {
        const table = new Table({
            id: i,
            booked: false,
            bill: 0,
            restId: req.body.restId
        });

        table.save();
        console.log(i);
    }
});

module.exports = router;