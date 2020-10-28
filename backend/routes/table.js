const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Table = require('../models/tableModel');




router.post("/addTable", (req, res, next) => {
    console.log("Testt");
    for (let i = 1; i <= req.body.quant; i++) {
        const table = new Table({
            id: i,
            booked: false,
            bill: 0,
            restId: req.body.restId
        });

        table.save().then(result => {
            console.log(result);
            res.status(200).json({ message: "Started!!!" })
        }).
        catch(err => { console.log(err) });
        console.log(i);
    }
});


router.get("/getTables/:restId", (req, res, next) => {
    console.log(req.params.restId);
    Table.find({ restId: req.params.restId }).then(result => {
            console.log(result);
            res.status(200).json({ tables: result });


        })
        .then(err => {
            console.log(err);
        })
});

module.exports = router;
