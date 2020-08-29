const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Restaurant = require('../models/restoModel');


router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const rest = new Restaurant({
                restId: req.body.id,
                restName: req.body.name,
                password: hash,
                tableCtr: req.body.tcount
            });
            rest.save().then(result => {
                res.status(201).json({ message: "User Registered !!!!!" });
            })
        }).catch(error => { console.log(error) });
});

router.post("/login", (req, res, next) => {

    Restaurant.findOne({ restId: req.body.id }).then(
        result => {
            if (!result) {
                res.status(200).json({
                    message: "Restaurant doesn't exist",
                    tableCount: null,
                    name: null
                });
            }
            if (result) {
                bcrypt.compare(req.body.password, result.password)
                    .then(auth => {
                        if (!auth) {
                            res.status(200).json({
                                message: "Password doesn't match",
                                tableCount: null,
                                name: null
                            });
                        } else {

                            res.status(200).json({

                                message: "Logged In!!!",
                                tableCount: result.tableCtr,
                                name: result.restName

                            });
                        }
                    })
            }
        }
    )
})




module.exports = router;
