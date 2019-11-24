const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Exercise = new Schema({
    exercise_name: {
        type: String
    },
    exercise_weight: {
        type: Number
    },
    exercise_set: {
        type: Number
    },
    exercise_rep: {
        type: Number
    }
},{
    collection: 'exercise'
});

module.exports = mongoose.model('Exercise', Exercise);