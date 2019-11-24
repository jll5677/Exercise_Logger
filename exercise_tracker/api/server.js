// express is for the backend logic, its' what processes everything
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
// to my understanding is cors works in the shadows fetching data from the database
// like get and post statements
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./db.js');
const exerciseRoutes = require('./exercise.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected')},
    err => {console.log('Can not connect to database server because' + err )}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/exercise', exerciseRoutes);

app.listen(PORT, function(){
    console.log('The server is running on Port:', PORT);
})