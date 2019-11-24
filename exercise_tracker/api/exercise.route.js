const express= require('express');
const exerciseRoutes = express.Router();

let Exercise = require('./exercise.model');

exerciseRoutes.route('/add').post(function (req, res) {
    let exercise = new Exercise(req.body);
    exercise.save()
        .then(exercise => {
            res.status(200).json({'exercise': 'exercise in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        })
});

// get route
exerciseRoutes.route('/').get(function (req, res) {
    Exercise.find(function(err, exercise){
        if(err){
            console.log(err);
        } else {
            res.json(exercise);
        }
    });
});

// edit route
exerciseRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Exercise.findById(id, function (err , business){
        res.json(exercise);
    });
});

// update route
exerciseRoutes.route('/update/:id').get(function (req, res){
    Exercise.findByID(req.params.id, function(err, business){
        if(!exercise)
            res.status(404).send("data is not found");
        else {
            exercise.exercise_name = req.body.exercise_name;
            exercise.exercise_weight = req.body.exercise_weight;
            exercise.exercise_set = req.body.exercise_set;
            exercise.exercise_rep = req.body.exercise_rep;

            exercise.save()
                .then(exercise => {
                    res.json('Update complete');
                })
                .catch(err => {
                    res.status(400).send("Unable to update the database");
                });
        }
    });
});

// delete route
exerciseRoutes.route('/delete/:id').get(function (req, res) {
    Exercise.findByIdAndRemove({_id: req.params.id}, function(err, exercise) {
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = exerciseRoutes;

