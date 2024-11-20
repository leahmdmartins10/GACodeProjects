// dependencies requirements
const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const catsRouter = require('./routes/cats');

require('dotenv').config();
require('./config/database');

// configure our express application
const PORT = process.env.PORT || 3000;
const app = express();

// middleware pipeline
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send({msg: 'Server is running!'});
})

app.use('/cats', catsRouter);

// app listen process
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})