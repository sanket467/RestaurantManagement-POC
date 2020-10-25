const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Food = require('../models/foodModel');



router.post("/addFood", (req, res, next) => {
    //console.log(req.body.name);
    console.log(req.body);
    const food = new Food({
        name: req.body.fname,
        cost: req.body.cost,
        foodId: req.body.id,
        restId: req.body.restId
    });

    food.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: "Food added !!!",
            food: {
                ...result
            }
        })
    })

})

router.get("/getFood/:restId", (req, res, next) => {
    Food.find({ restId: req.params.restId }).then(food => {
        if (food) {
            res.status(200).json(food);
        } else
            res.status(404).json({ message: "No foods in Database!!" });
    })
})


// router.get("/getFood/:id", (req, res, next) => {
//     Food.findOne({ foodId: req.params.id }).then(food => {
//         if (food) {
//             res.status(200).json(food);
//         } else
//             res.status(404).json({ message: "No foods in Database!!" });
//     })
// });


router.delete("/delFood/:id/:restId", (req, res, next) => {
    console.log(req.params.id);

    Food.deleteOne({ foodId: req.params.id, restId: req.params.restId }).then(result => {
        res.status(200).json({
            message: "Food Deleted !!"
        });
    });
});

module.exports = router;
