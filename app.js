const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
const cors = require('cors');


// router
const userRouter = require('./routes/user');

//router use
app.use('/user', userRouter);

mongoose.connect('mongodb://localhost:27017/Zamazon')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

//server creation 
const PORT = 3001;
app.listen(PORT, () => {
    console.log('Server started on port', PORT);
});