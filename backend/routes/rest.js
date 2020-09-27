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
                    name: null,
                    restId: null
                });
            }
            if (result) {
                bcrypt.compare(req.body.password, result.password)
                    .then(auth => {
                        if (!auth) {
                            res.status(200).json({
                                message: "Password doesn't match",
                                tableCount: null,
                                name: null,
                                restId: null
                            });
                        } else {

                            res.status(200).json({

                                message: "Logged In!!!",
                                tableCount: result.tableCtr,
                                name: result.restName,
                                restId: result.restId

                            });
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).json({ message: err });
                    });
            }
        }
    )
})

router.get("/dash/:id", (req, res, next) => {

    console.log(req.params.id);
    Restaurant.findOne({ restId: req.params.id }).then(result => {
            res.status(200).json({
                message: "Found",
                restName: result.restName,
                id: result.restId,
                tctr: result.tableCtr
            })
        })
        .catch(err => console.log(err));
});


router.patch("/table/:id", (req, res, next) => {
    console.log(req.params.id);
    console.log(req.body.table);
    Restaurant.update({ restId: req.params.id }, { tableCtr: req.body.table })
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
})


module.exports = router;